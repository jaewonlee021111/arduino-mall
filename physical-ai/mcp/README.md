# 실제 MCP stdio 실습

Python 표준 라이브러리만으로 JSON-RPC를 주고받는 서버·클라이언트다. 지원 규격은 MCP 2025-11-25 stdio로 명시하며, 모든 최신 규격 기능을 제공하는 SDK라는 뜻은 아니다.

```sh
python physical-ai/mcp/client_demo.py
```

별도 서버 프로세스를 시작하고 initialize → initialized 알림 → tools/list → tools/call을 수행한다. `requirements` 문서를 디스크에서 실제로 읽고, 허용 목록 밖 경로를 거절하는지 확인한다. 실제 요청·응답은 [evidence/mcp-transcript.json](../evidence/mcp-transcript.json)에 저장된다.

서버를 지원 클라이언트에 추가할 때 실행 파일은 `python`, 인자는 이 저장소의 절대 경로에 있는 `physical-ai/mcp/server.py`다. 로그인 토큰은 코드·JSON 설정 파일에 적지 말고 클라이언트의 비밀 환경변수 기능으로 전달한다.

## Notion 원격 읽기

`read_notion_page` 도구도 구현되어 있다. 본인 Notion integration에 공유한 페이지와 `NOTION_TOKEN` 환경변수가 있어야 실제 호출된다. 페이지 메타데이터·제목을 읽는 기능이며 본문 전체 조회·쓰기 기능은 제공하지 않는다. 현재 실제 페이지 URL·권한이 제공되지 않아 Notion 원격 호출은 실행하지 않았다. 로컬 문서 호출 성공을 Notion 호출 성공으로 표시하지 않는다.

참고: [MCP stdio 규격](https://modelcontextprotocol.io/specification/2025-11-25/basic/transports), [Notion 페이지 조회](https://developers.notion.com/reference/retrieve-a-page).

## 연결 상태 갱신
Notion 플러그인 설치는 확인했다. 현재 실행 세션에는 Notion 검색·읽기 메서드가 노출되지 않아 실제 원격 호출은 아직 수행하지 못했다. [연결 확인 기록](../evidence/notion-connection.json)을 참고한다.
