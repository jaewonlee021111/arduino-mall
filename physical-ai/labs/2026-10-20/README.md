# AI 코드 에이전트 실습

[실제 장비 대여 프로그램](../../projects/equipment-loan/README.md)에서 R01~R05를 구현했다. 대여·반납·재고 경계·저장·복원·실패 시 원본 보존을 테스트한다.

| 교안 단원 | 실제 결과 |
| --- | --- |
| E01~E05 도구·준비·계획·수정·실행 | README와 실행된 코드·evidence/validation.json |
| E06 요구사항 | projects/equipment-loan/docs/requirements.md |
| E07 화면·데이터·함수 설계 | projects/equipment-loan/docs/design.md |
| E08 요청문 | projects/equipment-loan/docs/task.md |
| E09~E10 컨텍스트·기록 | docs/handoff.md와 실제 실행 로그 |
| E11 프로젝트 규칙 | AGENTS.md |
| E12 반복 검토 Skill | .agents/skills/review-inventory/SKILL.md |
| E13~E14 연결 방식·MCP | ../../mcp/server.py와 실제 stdio 요청·응답 |
| E15 diff·테스트·오류 재현 | 6개 재고 테스트, Git diff·충돌 기록 |
| E16 변경·인수인계 | 원본 변경 방지·원자적 저장 구현, docs/handoff.md |

로컬 MCP 문서는 실제 읽었다. Notion 원격 읽기는 연결·대상 페이지가 없어 미실행으로 남긴다.

## 연결 상태 갱신
Notion 플러그인 설치는 확인했다. 현재 실행 세션에는 Notion 검색·읽기 메서드가 노출되지 않아 실제 원격 호출은 아직 수행하지 못했다. [연결 확인 기록](../../evidence/notion-connection.json)을 참고한다.
