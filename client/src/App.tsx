import { useState } from 'react';
import { Loader2, Copy, CheckCheck, Download } from 'lucide-react';
import './App.css';

interface FanoutQuery {
  id: string;
  category: string;
  purpose: string;
  query: string;
}

interface FanoutResponse {
  main_query: string;
  domain?: string;
  fanouts: FanoutQuery[];
}

function App() {
  const [mainQuery, setMainQuery] = useState('');
  const [domain, setDomain] = useState('');
  const [maxFanouts, setMaxFanouts] = useState(10);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<FanoutResponse | null>(null);
  const [error, setError] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!mainQuery.trim()) {
      setError('Please enter a query');
      return;
    }

    setLoading(true);
    setError('');
    setResult(null);

    try {
      const response = await fetch('/api/fanout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          main_query: mainQuery,
          domain: domain || undefined,
          max_fanouts: maxFanouts,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to generate fanout queries');
      }

      const data: FanoutResponse = await response.json();
      setResult(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const copyAllQueries = () => {
    if (!result) return;
    const allQueries = result.fanouts.map(f => f.query).join('\n');
    navigator.clipboard.writeText(allQueries);
    setCopiedId('all');
    setTimeout(() => setCopiedId(null), 2000);
  };

  const downloadJSON = () => {
    if (!result) return;
    const blob = new Blob([JSON.stringify(result, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `fanout-queries-${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const downloadContentBrief = () => {
    if (!result) return;
    
    // Group fanouts by category
    const groupedByCategory: Record<string, FanoutQuery[]> = {};
    result.fanouts.forEach(fanout => {
      if (!groupedByCategory[fanout.category]) {
        groupedByCategory[fanout.category] = [];
      }
      groupedByCategory[fanout.category].push(fanout);
    });

    // Create content brief
    let brief = `CONTENT BRIEF: ${result.main_query}\n`;
    brief += `${'='.repeat(60)}\n\n`;
    
    if (result.domain) {
      brief += `Domain: ${result.domain}\n`;
    }
    brief += `Generated: ${new Date().toLocaleString()}\n`;
    brief += `Total Topics to Cover: ${result.fanouts.length}\n\n`;
    
    brief += `${'='.repeat(60)}\n`;
    brief += `CONTENT COVERAGE PLAN\n`;
    brief += `${'='.repeat(60)}\n\n`;
    
    brief += `This content brief breaks down "${result.main_query}" into ${result.fanouts.length} key research areas.\n`;
    brief += `Each section below represents an angle your content should cover for comprehensive coverage.\n\n`;

    // Add each category
    Object.keys(groupedByCategory).forEach((category, idx) => {
      const categoryName = category.replace('_', ' ').toUpperCase();
      brief += `\n${idx + 1}. ${categoryName}\n`;
      brief += `${'-'.repeat(60)}\n`;
      
      groupedByCategory[category].forEach((fanout, qIdx) => {
        brief += `\n${String.fromCharCode(97 + qIdx)}. ${fanout.query}\n`;
        brief += `   Purpose: ${fanout.purpose}\n`;
      });
      brief += `\n`;
    });

    brief += `\n${'='.repeat(60)}\n`;
    brief += `CONTENT CREATION CHECKLIST\n`;
    brief += `${'='.repeat(60)}\n\n`;
    
    result.fanouts.forEach((fanout, idx) => {
      brief += `[ ] ${idx + 1}. ${fanout.query}\n`;
    });

    brief += `\n${'='.repeat(60)}\n`;
    brief += `ALL QUERIES (for research):\n`;
    brief += `${'='.repeat(60)}\n\n`;
    brief += result.fanouts.map((f, i) => `${i + 1}. ${f.query}`).join('\n');
    
    brief += `\n\n--- End of Content Brief ---\n`;

    const blob = new Blob([brief], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `content-brief-${Date.now()}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      core_facts: '#3b82f6',
      background: '#8b5cf6',
      comparisons: '#ec4899',
      edge_cases: '#f59e0b',
      implementation: '#10b981',
      evaluation: '#06b6d4',
      follow_up: '#6366f1',
    };
    return colors[category] || '#64748b';
  };

  return (
    <div className="app">
      <div className="container">
        <header className="header">
          <h1>Fanout Query Generator</h1>
          <p className="subtitle">
            Transform any topic into comprehensive sub-queries for complete content coverage
          </p>
          <p className="subtitle-secondary">
            Generate research queries that cover all angles of your topic - perfect for content planning and SEO strategy
          </p>
        </header>

        <form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <label htmlFor="mainQuery">Main Query *</label>
            <textarea
              id="mainQuery"
              value={mainQuery}
              onChange={(e) => setMainQuery(e.target.value)}
              placeholder="e.g., What is artificial intelligence and how does it work?&#10;e.g., How to start a successful podcast in 2024?&#10;e.g., Benefits and risks of intermittent fasting"
              rows={3}
              disabled={loading}
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="domain">Domain (optional)</label>
              <input
                id="domain"
                type="text"
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
                placeholder="e.g., technical, marketing, research"
                disabled={loading}
              />
            </div>

            <div className="form-group">
              <label htmlFor="maxFanouts">Max Fanouts</label>
              <input
                id="maxFanouts"
                type="number"
                value={maxFanouts}
                onChange={(e) => setMaxFanouts(parseInt(e.target.value))}
                min={1}
                max={20}
                disabled={loading}
              />
            </div>
          </div>

          <button type="submit" className="btn-primary" disabled={loading}>
            {loading ? (
              <>
                <Loader2 size={20} className="spinner" />
                Generating...
              </>
            ) : (
              <>
                Generate Fanout Queries
              </>
            )}
          </button>
        </form>

        {error && (
          <div className="error">
            <strong>Error:</strong> {error}
          </div>
        )}

        {result && (
          <div className="results">
            <div className="results-header">
              <h2>Generated Fanout Queries ({result.fanouts.length})</h2>
              <div className="results-actions">
                <button
                  onClick={copyAllQueries}
                  className="btn-secondary"
                  title="Copy all queries"
                >
                  {copiedId === 'all' ? <CheckCheck size={18} /> : <Copy size={18} />}
                  Copy All
                </button>
                <button
                  onClick={downloadJSON}
                  className="btn-secondary"
                  title="Download as JSON"
                >
                  <Download size={18} />
                  Export JSON
                </button>
                <button
                  onClick={downloadContentBrief}
                  className="btn-secondary"
                  title="Download as Content Brief"
                >
                  <Download size={18} />
                  Content Brief
                </button>
              </div>
            </div>

            <div className="results-meta">
              <span><strong>Main Query:</strong> {result.main_query}</span>
              {result.domain && <span><strong>Domain:</strong> {result.domain}</span>}
            </div>

            <div className="fanouts-grid">
              {result.fanouts.map((fanout) => (
                <div key={fanout.id} className="fanout-card">
                  <div className="fanout-header">
                    <span
                      className="fanout-category"
                      style={{ backgroundColor: getCategoryColor(fanout.category) }}
                    >
                      {fanout.category.replace('_', ' ')}
                    </span>
                    <button
                      onClick={() => copyToClipboard(fanout.query, fanout.id)}
                      className="btn-copy"
                      title="Copy query"
                    >
                      {copiedId === fanout.id ? (
                        <CheckCheck size={16} />
                      ) : (
                        <Copy size={16} />
                      )}
                    </button>
                  </div>
                  <p className="fanout-purpose">{fanout.purpose}</p>
                  <div className="fanout-query">{fanout.query}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

