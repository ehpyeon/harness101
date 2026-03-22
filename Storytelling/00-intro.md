# Intro — 이 이야기를 시작하기 전에

> *"The Model IS the Agent. The Code IS the Harness."*

---

## 지민의 첫날

박지민은 오늘 Claude Code를 처음 설치했다.

2년차 풀스택 개발자. 10인 스타트업. SaaS 제품을 만들고 있다. 론칭 데드라인은 4주 후.

"AI 코딩 도구를 쓰면 빨라진다고 했잖아." 설치 버튼을 눌렀다.

```bash
$ claude
```

터미널에 프롬프트가 나타났다. 지민은 첫 질문을 던졌다.

```
지민: 이 프로젝트의 구조를 파악해줘
Claude: 네, 먼저 파일 구조를 확인하겠습니다...
```

Claude가 스스로 `ls`, `cat`, `find`를 실행하기 시작했다.
파일을 읽고, 분석하고, 다음 파일을 읽고, 정리해서 알려줬다.

"이건... 그냥 챗봇이 아닌데?"

지민의 4주 여정이 시작됐다. 이 강의는 그 여정의 기록이다.

---

## 이 강의는 왜 존재하는가

개발자들 사이에서 이런 대화가 흔했다.

```
"Claude Code 써봤어?"
"응, 근데 그냥 AI 코딩 도구 아니야?"
"아니, 그거보다 훨씬... 근데 설명하기가 좀 어려워."
```

Claude Code는 설명하기 어렵다.
단순한 자동완성 도구도 아니고, 챗봇도 아니고, IDE 플러그인도 아니다.

**Claude Code는 에이전트가 일하는 환경이다.**

이 한 문장을 이해하면 모든 것이 풀린다.
이 한 문장을 이해하지 못하면 Claude Code의 기능 하나하나가 따로 놀게 된다.

이 강의는 **그 한 문장을 이해시키기 위해** 존재한다.

---

## 가장 흔한 오해: "Claude Code가 Claude를 똑똑하게 만든다"

틀렸다.

**Claude는 이미 똑똑하다.**

수십억 번의 학습을 통해 생각하고, 계획하고, 행동하는 법을 배운 모델이다.
코드를 읽는 법을 안다. 버그를 찾는 법을 안다. 아키텍처를 설계하는 법을 안다.

그런데 Claude에게 한 가지가 없었다.

**손.**

2022년의 Claude는 텍스트를 받고 텍스트를 반환하는 함수였다.
"이 파일의 버그를 찾아줘"라고 물으면 "3번째 줄에 null 체크가 없습니다"라고 답했다.
도움이 됐다. 하지만 **직접 파일을 읽을 수 없었고, 고칠 수도 없었다.**

개발자가 Claude의 답을 보고 직접 코드를 수정하고, 결과를 복사해서 다시 붙여넣었다.

**개발자 자신이 Claude의 손이었다.**

Claude Code는 Claude에게 **손을 달아준 것**이다.
파일을 읽는 손, 코드를 실행하는 손, 터미널을 두드리는 손.
Claude를 더 똑똑하게 만든 게 아니라, 이미 똑똑한 Claude가 **일할 수 있는 환경**을 만든 것이다.

이 환경을 **Harness(하네스)** 라고 부른다.

---

## Harness: 에이전트의 작업 환경

말은 뛸 줄 안다. 기수가 말에게 뛰는 법을 가르치는 게 아니다.
기수가 하는 일은 **말이 올바른 방향으로 뛸 수 있도록 환경을 만드는 것**이다.
고삐(harness), 안장, 경로 안내.

Claude도 마찬가지다.
Claude는 이미 에이전트다. 생각하고, 계획하고, 행동하는 법을 안다.
우리가 할 일은 **Claude가 우리 프로젝트에서 올바르게 일할 수 있도록 환경을 설계하는 것**이다.

이 환경은 4가지 레이어로 구성된다:

```
Harness = Tools + Knowledge + Context + Permissions
```

### Tools — Claude의 손

Claude가 실제로 **할 수 있는 것들**.

```
파일을 읽는다          → Read
파일을 쓴다            → Write, Edit
터미널을 실행한다       → Bash
파일을 검색한다         → Glob, Grep
외부 서비스를 쓴다      → MCPs (GitHub, Jira, Slack, DB...)
```

Tools가 없으면 Claude는 생각만 할 수 있고 행동할 수 없다.
Tools는 Claude의 팔과 다리다.

### Knowledge — Claude의 기억

Claude가 **알고 있는 것들**.

```
이 프로젝트가 뭔지      → CLAUDE.md (항상 활성화)
여기서 어떻게 일하는지   → Rules (맥락 기반 선택)
특정 워크플로우의 절차   → Skills (명시적 호출 시에만)
에이전트가 학습한 것     → MEMORY.md (자동 축적)
```

Knowledge가 없으면 Claude는 매일 아침 출근하는 신입사원처럼
"이 프로젝트가 뭔가요?"부터 다시 물어야 한다.

### Context — Claude의 단기 메모리

Claude가 **지금 이 대화에서 경험한 것들**.

```
대화 히스토리            → messages 배열
읽은 파일, 실행 결과      → tool_results
메모리 압축              → /compact
격리된 작업 공간          → Subagents (깨끗한 컨텍스트)
작업 계획                → TodoWrite, Task System
```

Context가 꽉 차면 Claude의 집중력이 흩어진다.
오래된 내용이 새로운 판단을 방해한다.
좋은 Harness 엔지니어는 Context를 능동적으로 관리한다.

### Permissions — Claude의 경계

Claude가 **할 수 있는 것과 없는 것**.

```
행동 전에 차단한다       → Hooks (PreToolUse)
행동 후에 반응한다       → Hooks (PostToolUse)
전체 권한 수준을 조절한다 → Permission Modes (Normal/Plan/Auto-Accept)
에이전트별 최소 권한      → Tools 제한
```

Permissions가 없으면 Claude는 `git push`를 마음대로 실행하고,
`rm -rf`를 아무 때나 돌리고, 프로덕션 DB를 변경할 수 있다.
자유에는 경계가 필요하다.

---

## 이 강의의 구성: 하나의 이야기

이 강의는 **매뉴얼이 아니다.** **이야기다.**

```
매뉴얼 방식:
  "CLAUDE.md는 이런 기능이고, 이렇게 사용합니다."
  "Hooks는 이런 기능이고, 이렇게 설정합니다."
  "Skills는 이런 기능이고..."
  → 기능 나열. 왜 존재하는지 모른다.

이야기 방식:
  "매번 프로젝트를 설명해야 해서 지쳤다."
  → 그래서 CLAUDE.md가 탄생했다.
  "Claude가 파일을 수정할 때 자동으로 lint를 돌리고 싶었다."
  → 그래서 Hooks가 탄생했다.
  "같은 워크플로우를 매일 10번 타이핑했다."
  → 그래서 Skills가 탄생했다.
  → 각 기능이 왜 존재하는지 스스로 이해하게 된다.
```

**모든 기능은 문제에서 태어났다.**
그리고 모든 해결책은 새로운 문제를 만들었다.
이 강의는 그 연쇄를 따라간다.

```
문제 → 해결 → 새로운 문제 → 새로운 해결 → ...

Agent Loop가 생겼다
    ↓ "매번 프로젝트를 설명해야 한다"
CLAUDE.md가 생겼다
    ↓ "Claude 행동에 반응하고 싶다"
Hooks가 생겼다
    ↓ "같은 워크플로우를 반복한다"
Skills가 생겼다
    ↓ "복잡한 작업에서 방향을 잃는다"
Task System이 생겼다
    ↓ "컨텍스트가 오염된다"
Agents가 생겼다
    ↓ ...13단원까지 계속된다
```

### 각 단원의 구조: 캠프파이어 패턴

모든 단원은 세 단계를 따른다:

```
🔥 캠프파이어 (이야기)
  "왜 이게 필요했는가?"
  문제를 느끼고, 해결의 발견을 따라간다.

🔧 작업장 (실습)
  "직접 해보자"
  실제 설정, 코드, 실행 결과를 다룬다.

💡 성찰 (정리)
  "무엇이 달라졌고, 다음에 뭐가 깨지는가?"
  배운 것을 정리하고, 다음 이야기로 넘어간다.
```

---

## 이 강의를 읽는 법

### 처음 읽는다면

처음부터 순서대로 읽어라. 이야기의 인과 관계를 따라가야 전체 그림이 보인다.

```
00 Harness Engineering (여기)
→ 01 Agent Loop → 02 CLAUDE.md → 03 Hooks → 04 Skills
→ 05 Task System → 06 Agents → 07 Background Tasks
→ 08 Rules → 09 MCPs → 10 Context Compact
→ 11 Agent Teams → 12 Worktree → 13 Agent Memory
```

### 특정 문제를 해결하고 싶다면

| 나는 이런 게 궁금하다 | 이 단원을 보라 |
|---------------------|--------------|
| Claude Code가 왜 이렇게 동작하는지 | 00 + 01 |
| 매번 프로젝트 설명이 귀찮다 | 02 CLAUDE.md |
| 파일 수정 후 자동으로 뭔가 하고 싶다 | 03 Hooks |
| 반복 워크플로우를 패키징하고 싶다 | 04 Skills |
| 복잡한 작업에서 방향을 잃는다 | 05 Task System |
| 컨텍스트가 노이즈로 가득하다 | 06 Agents |
| 느린 빌드가 Claude를 막는다 | 07 Background Tasks |
| CLAUDE.md가 너무 길어졌다 | 08 Rules |
| 외부 서비스(GitHub, DB)를 연결하고 싶다 | 09 MCPs |
| 컨텍스트가 자꾸 꽉 찬다 | 10 Context Compact |
| 여러 에이전트를 동시에 쓰고 싶다 | 11, 12 Agent Teams |
| 에이전트가 배운 것을 기억하게 하고 싶다 | 13 Memory |

---

## 당신은 Harness Engineer다

이 강의를 마치면 당신은 Claude Code의 "사용자"가 아니라 **Harness Engineer**가 된다.

```
사용자:           Claude Code가 주는 대로 쓴다.
Harness Engineer: Claude가 일할 환경을 능동적으로 설계한다.
```

차이는 크다.

```
사용자:           "Claude가 이걸 못 하네."
Harness Engineer: "이 작업에 필요한 Tool이 없구나. MCP를 추가하자."

사용자:           "Claude가 매번 같은 실수를 해."
Harness Engineer: "Knowledge가 부족하구나. Rule을 추가하자."

사용자:           "Claude가 느려졌어."
Harness Engineer: "Context가 꽉 찼구나. /compact하고 Subagent를 쓰자."
```

**Claude의 능력을 탓하기 전에, Harness를 점검하라.**
대부분의 문제는 Harness 설계로 해결된다.

---

## 자, 이야기를 시작하자

모든 것은 하나의 루프에서 시작됐다.
30줄의 Python 코드. `while True`.
그것이 전부였다. 그리고 그것만으로 충분했다.

→ **[Ch01. The Agent Loop — 복사-붙여넣기의 종말](./00-the-agent-loop.md)**
