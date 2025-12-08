# 📚 Fanout Query Examples

This document provides detailed examples of how the Fanout Query Generator works with different types of queries.

## Example 1: Technical/Development Query

### Input
```json
{
  "main_query": "How do I implement OAuth2 authentication in a Node.js app?",
  "domain": "technical",
  "max_fanouts": 12
}
```

### Expected Output Categories and Queries

**Core Facts:**
- What is OAuth2 authentication protocol?
- What are the main components of OAuth2 (client, authorization server, resource server)?
- What is the difference between OAuth2 and OAuth1?

**Background:**
- Why was OAuth2 created and what problems does it solve?
- What are the security vulnerabilities in traditional password authentication?

**Comparisons:**
- OAuth2 vs JWT authentication for Node.js applications
- Passport.js vs custom OAuth2 implementation pros and cons
- OAuth2 vs session-based authentication in Node.js

**Implementation:**
- Step-by-step guide to implement OAuth2 in Express.js
- Popular Node.js libraries for OAuth2 implementation (Passport, Grant, etc.)
- How to set up OAuth2 with Google/GitHub/Facebook providers?

**Edge Cases:**
- Common security pitfalls in OAuth2 implementation
- How to handle OAuth2 token refresh and expiration?
- What to do when OAuth2 provider is temporarily unavailable?

**Evaluation:**
- How to test OAuth2 authentication flows in Node.js?
- Security best practices checklist for OAuth2 implementation

**Follow-up:**
- How to implement OAuth2 with microservices architecture?
- Advanced OAuth2 topics: PKCE, dynamic client registration

---

## Example 2: Business/Marketing Query

### Input
```json
{
  "main_query": "What is product-market fit and how do I achieve it?",
  "domain": "marketing",
  "max_fanouts": 10
}
```

### Expected Output

**Core Facts:**
- What is product-market fit definition?
- Who coined the term product-market fit and when?
- What are the key indicators of product-market fit?

**Background:**
- History of product-market fit concept in startup methodology
- Why is product-market fit critical for startup success?

**Comparisons:**
- Product-market fit vs market validation differences
- Product-market fit vs growth hacking priorities

**Implementation:**
- Step-by-step framework to find product-market fit
- How to conduct customer interviews for product-market fit?
- What metrics to track when seeking product-market fit?

**Evaluation:**
- How to measure if you've achieved product-market fit?
- Sean Ellis test for product-market fit measurement

**Follow-up:**
- What to do after achieving product-market fit?
- How to maintain product-market fit as market evolves?

---

## Example 3: Research/Academic Query

### Input
```json
{
  "main_query": "What is quantum computing?",
  "domain": "research",
  "max_fanouts": 15
}
```

### Expected Output

**Core Facts:**
- What is quantum computing definition?
- What are qubits and how do they differ from classical bits?
- What is quantum superposition and entanglement?
- What are the fundamental principles of quantum mechanics in computing?

**Background:**
- History of quantum computing development timeline
- Who are the key pioneers in quantum computing research?
- Why is quantum computing considered revolutionary?

**Comparisons:**
- Quantum computing vs classical computing capabilities
- Different quantum computing approaches: gate-based vs annealing vs topological
- IBM quantum vs Google quantum vs D-Wave comparison

**Implementation:**
- What programming languages are used for quantum computing?
- How to access quantum computers for research (IBM Quantum, AWS Braket)?
- Basic quantum algorithms: Shor's algorithm, Grover's algorithm

**Edge Cases:**
- What are the limitations of current quantum computers?
- Quantum decoherence and error correction challenges
- Problems quantum computers cannot solve better than classical computers

**Evaluation:**
- How is quantum computing performance measured (quantum volume)?
- What benchmarks exist for quantum computing?

**Follow-up:**
- What are the potential applications of quantum computing in cryptography?
- Future of quantum computing: when will it be mainstream?
- How to start learning quantum computing?

---

## Example 4: Health/Medical Query

### Input
```json
{
  "main_query": "How does intermittent fasting affect health?",
  "domain": "health",
  "max_fanouts": 10
}
```

### Expected Output

**Core Facts:**
- What is intermittent fasting definition?
- What are the different types of intermittent fasting (16:8, 5:2, OMAD)?
- How does intermittent fasting work biologically?

**Background:**
- History of fasting in human evolution and cultures
- Scientific research history on intermittent fasting

**Comparisons:**
- Intermittent fasting vs calorie restriction for weight loss
- Different intermittent fasting protocols comparison
- Intermittent fasting vs traditional dieting effectiveness

**Implementation:**
- How to start intermittent fasting for beginners?
- What can you eat/drink during fasting periods?
- How to combine intermittent fasting with exercise?

**Edge Cases:**
- Who should not practice intermittent fasting (medical conditions)?
- Potential side effects and risks of intermittent fasting
- How does intermittent fasting affect different age groups?

**Evaluation:**
- What health metrics improve with intermittent fasting?
- How to measure if intermittent fasting is working for you?

**Follow-up:**
- Long-term effects of intermittent fasting on health
- Advanced intermittent fasting strategies

---

## Example 5: AI/Machine Learning Query

### Input
```json
{
  "main_query": "What are Large Language Models (LLMs)?",
  "domain": "technical",
  "max_fanouts": 12
}
```

### Expected Output

**Core Facts:**
- What is a Large Language Model (LLM)?
- How do LLMs work (transformer architecture basics)?
- What makes an LLM "large" - parameter count and training data?

**Background:**
- Evolution of language models: from n-grams to LLMs
- Key breakthroughs: attention mechanism, transformers, GPT series
- Who developed the first major LLMs and when?

**Comparisons:**
- GPT-4 vs Claude vs Gemini vs Llama comparison
- LLMs vs traditional NLP approaches
- Open-source LLMs vs proprietary LLMs

**Implementation:**
- How to use LLM APIs (OpenAI, Anthropic, etc.)?
- How to fine-tune an LLM for specific tasks?
- Hardware requirements for running LLMs locally

**Edge Cases:**
- LLM hallucinations and limitations
- Bias and ethical concerns in LLMs
- When LLMs fail: tasks they struggle with

**Evaluation:**
- How are LLMs evaluated (MMLU, HumanEval, etc.)?
- Prompt engineering best practices for LLMs

**Follow-up:**
- Future of LLMs: multimodal models, agents, reasoning
- How to stay updated on latest LLM developments?

---

## Tips for Writing Effective Main Queries

1. **Be Specific**: "How to build a REST API in Python?" is better than "APIs"
2. **Include Context**: Mention your domain if relevant
3. **Ask Real Questions**: Frame as questions you'd ask a colleague
4. **Avoid Yes/No**: Open-ended questions generate better fanouts
5. **Combine Topics**: "How to deploy a machine learning model to production?" works well

## Understanding the Categories

- **core_facts**: Use when you need foundational knowledge
- **background**: Get historical context and "why it matters"
- **comparisons**: Understand alternatives and tradeoffs
- **edge_cases**: Learn what can go wrong
- **implementation**: Get actionable how-to information
- **evaluation**: Learn how to measure success
- **follow_up**: Explore advanced topics and next steps

