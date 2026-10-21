# Physical AI · 학습 기록

**이재원 | 공개 수업 진도 기준: 2026.10.21**

데이터를 읽고 Python으로 처리한 뒤 GitHub에 기록하고, AI 코드 에이전트와 웹 제작으로 연결하는 학습 자료입니다.

## 날짜별 수업 정리

| 날짜 | 공개된 수업 | 복습 노트 |
| --- | --- | --- |
| 10/08 | 데이터 기초, CSV/JSON | [핵심 개념·실습·체크리스트](notes/2026-10-08.md) |
| 10/14 | Python 기초 | [핵심 개념·실습·체크리스트](notes/2026-10-14.md) |
| 10/15 | Python 심화 | [핵심 개념·실습·체크리스트](notes/2026-10-15.md) |
| 10/16 | Git/GitHub | [핵심 개념·실습·체크리스트](notes/2026-10-16.md) |
| 10/20 | AI 코드에이전트 | [핵심 개념·실습·체크리스트](notes/2026-10-20.md) |
| 10/21 | HTML/CSS/React/MCP | [핵심 개념·실습·체크리스트](notes/2026-10-21.md) |

공개 사이트에서 확인한 6개 수업을 정리했습니다. 날짜 사이의 공백을 휴강으로 해석하지 않으며, 10월 22일 이후 진도는 포함하지 않았습니다. 체크박스는 본인이 복습·제출을 확인하면서 채웁니다.

## 실행 가능한 복습 예제

Python 3.10 이상, 외부 패키지 설치 없이 실행합니다. 터미널에서 이 저장소의 루트로 이동하세요.

```sh
python physical-ai/examples/tree.py 3
python physical-ai/examples/tree.py 4 --count 3
python physical-ai/examples/sensor_pipeline.py
python -m unittest discover -s physical-ai/tests -v
```

| 예제 | 연습할 내용 |
| --- | --- |
| [크리스마스 트리](examples/tree.py) | 입력 검사·반복·문자열·함수, 여러 트리 가로 출력 |
| [센서 CSV → JSON](examples/sensor_pipeline.py) | 식별자 보존·함수·예외·결측·범위 검사·저장 |
| [가상 센서 데이터](data/readings.csv) | 정상·빈칸·범위 밖·잘못된 숫자 비교 |

예제는 이번 정리를 위해 새로 작성한 복습 코드입니다. 강사 원본이나 기존 제출 파일로 표시하지 않습니다. 센서 범위 0~35는 실습용 임의 기준입니다.

## 기존 프로젝트

| 프로젝트 | 소스 코드 |
| --- | --- |
| MAKER MARKET · 아두이노 쇼핑몰 | [프로젝트 안내](../README.md) |
| PC 부품 조회·견적 | [프로젝트 안내](../pc-build/README.md) |

## 기록 양식

- [하루 학습 기록](templates/daily-log.md)
- [에이전트 작업 요청·인수인계](templates/agent-task.md)
- [팀 검수·Notion MCP·배포 증빙](templates/team-review.md)

오늘 수업은 랜딩페이지 공개, React 비교, 팀 검수와 Notion MCP 확인까지입니다. 실제 배포·팀 검수·MCP 호출 기록은 확인 가능한 결과를 얻은 뒤 양식에 남깁니다.

## 출처

[공식 교육 사이트](https://zeusk302-png.github.io/kdigital-physical-ai/)의 각 날짜별 교안·학습 목표·제출 항목을 확인해 재구성했습니다. 최신 공지와 제출 기준은 원문을 우선 확인하세요. 확인일: 2026-10-21.
