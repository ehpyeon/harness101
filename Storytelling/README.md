# Claude Code 개념 지도 — 하나의 이야기

> *"The Model IS the Agent. The Code IS the Harness."*
> — Harness Engineering

---

## 진짜 시작점을 이해하기

많은 사람들이 Claude Code를 "Claude를 똑똑하게 만드는 도구"로 오해한다.

틀렸다.

**Claude는 이미 똑똑하다.** 수십억 번의 학습을 통해 생각하고, 계획하고, 행동하는 법을 배운 모델이다. Claude가 에이전트인 이유는 Claude Code 때문이 아니다. Claude 자체가 에이전트다.

**Claude Code는 Harness다.**

Harness란 에이전트가 특정 도메인에서 일할 수 있도록 만든 환경이다:

```
Harness = Tools + Knowledge + Context + Permissions

Tools:       Claude의 손 — 파일 읽기, 코드 실행, API 호출
Knowledge:   Claude의 기억 — 프로젝트 정보, 규칙, 도메인 지식
Context:     Claude의 단기 메모리 — 지금까지 한 일
Permissions: Claude의 경계 — 무엇을 할 수 있고 없는지
```

Claude Code의 모든 기능은 이 Harness의 어딘가에 속한다.
그리고 각 기능은 특정 문제를 해결하기 위해 탄생했다.

---

## 이야기의 흐름

```
2022년: Claude API — 텍스트 in, 텍스트 out
    ↓ "실제 파일을 읽고 코드를 실행할 수 없다"
2023년: Tool Use + Agent Loop 발견
    ↓ "while loop 30줄로 완전한 에이전트 완성"
Claude Code 탄생 — Loop + Tools + CLAUDE.md
    ↓ "매번 프로젝트를 설명해야 한다"
CLAUDE.md — [Knowledge] 프로젝트 기억 주입
    ↓ "Claude 행동에 반응하고 싶다"
Hooks — [Permissions] 행동 전/후 개입
    ↓ "같은 워크플로우를 반복한다"
Skills — [Knowledge] On-demand 지식 패키징
    ↓ "복잡한 작업에서 방향을 잃는다"
TodoWrite & Task System — [Context] 계획과 영속성
    ↓ "컨텍스트가 오염된다"
Agents — [Context] 격리된 전문 에이전트
    ↓ "느린 작업이 루프를 막는다"
Background Tasks — [Tools+Context] 비동기 실행
    ↓ "CLAUDE.md가 너무 커졌다"
Rules — [Knowledge] 주제별 체계화
    ↓ "외부 세계와 단절돼 있다"
MCPs — [Tools] 외부 서비스 연결
    ↓ "context window가 꽉 찬다"
/compact — [Context] 3층 압축으로 무한 세션
    ↓ "단일 에이전트로는 한계가 있다"
Agent Teams — [Context] 멀티 에이전트 팀 조율
    ↓ "팀이 같은 파일을 동시에 수정한다"
Worktree Isolation — [Context+Permissions] 파일 격리
    ↓ "에이전트가 매번 처음부터 배운다"
Agent Memory — [Knowledge] 에이전트의 영속적 학습
```

---

## 파일 목록

| 파일 | Harness 레이어 | 내용 |
|------|--------------|------|
| [00-intro.md](./00-intro.md) | 개요 | Harness Engineering 소개, 강의 구성 |
| [00-the-agent-loop.md](./00-the-agent-loop.md) | 기반 | 진짜 시작 — Loop와 Harness 개념 |
| [01-CLAUDE-md.md](./01-CLAUDE-md.md) | Knowledge | 프로젝트 기억 주입 |
| [02-hooks.md](./02-hooks.md) | Permissions | 행동 전/후 개입 |
| [03-skills.md](./03-skills.md) | Knowledge | On-demand 지식 패키징 |
| [08-todo-task-system.md](./08-todo-task-system.md) | Context | 계획과 영속성 — TodoWrite & Task System |
| [04-agents.md](./04-agents.md) | Context | 격리된 전문 에이전트 |
| [09-background-tasks.md](./09-background-tasks.md) | Tools+Context | 느린 작업의 비동기화 |
| [05-rules.md](./05-rules.md) | Knowledge | 규칙의 체계화 |
| [06-mcps.md](./06-mcps.md) | Tools | 외부 세계와 연결 |
| [07-context-compact.md](./07-context-compact.md) | Context | 메모리 한계 극복 |
| [10-agent-teams.md](./10-agent-teams.md) | Context | 멀티 에이전트 팀 조율 |
| [11-worktree-isolation.md](./11-worktree-isolation.md) | Context+Permissions | 병렬 에이전트 파일 격리 |
| [12-agent-memory.md](./12-agent-memory.md) | Knowledge | 에이전트의 영속적 학습 |

---

## 읽는 순서

**순서대로 읽으면 하나의 이야기가 된다**:

```
00 Harness Engineering → 01 Agent Loop → 02 CLAUDE.md → 03 Hooks → 04 Skills
→ 05 Task System → 06 Agents → 07 Background Tasks
→ 08 Rules → 09 MCPs → 10 Context Compact
→ 11 Agent Teams → 12 Worktree → 13 Agent Memory
```

**개념별로 찾는다면**:
- "Claude Code가 왜 이렇게 동작하는지 이해하고 싶다" → `00`, `01`
- "CLAUDE.md를 잘 쓰고 싶다" → `02`, `08`
- "훅을 설정하고 싶다" → `03`
- "슬래시 커맨드를 만들고 싶다" → `04`
- "작업 계획을 잡고 싶다" → `05`
- "에이전트를 만들고 싶다" → `06`
- "느린 빌드가 Claude를 막는다" → `07`
- "CLAUDE.md가 너무 길어졌다" → `08`
- "외부 서비스를 연결하고 싶다" → `09`
- "컨텍스트가 자꾸 꽉 찬다" → `10`
- "여러 에이전트를 동시에 쓰고 싶다" → `11`, `12`
- "에이전트가 배운 것을 기억하게 하고 싶다" → `13`
