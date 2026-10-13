const PRODUCTS = [
{id:'uno',name:'아두이노 UNO R3 호환 보드',category:'board',price:8900,image:'board',badge:'BEST',description:'첫 아두이노 프로젝트를 위한 기본 개발 보드',specs:['ATmega328P 기반 호환 보드','디지털 I/O 14개 · 아날로그 입력 6개','USB 케이블 별도']},
{id:'esp32',name:'ESP32 무선 개발 보드',category:'board',price:12900,image:'esp32',badge:'IoT',description:'Wi-Fi와 블루투스로 연결하는 스마트 프로젝트',specs:['ESP32 기반 무선 개발 보드','Wi-Fi / Bluetooth 지원','GPIO 및 센서 연결 실습용']},
{id:'nano',name:'아두이노 Nano 호환 보드',category:'board',price:6500,image:'nano',badge:'COMPACT',description:'작은 공간에도 가볍게, 컴팩트한 나노 보드',specs:['ATmega328P 기반','브레드보드에 장착 가능한 폼팩터','USB 케이블 별도']},
{id:'starter',name:'아두이노 스타터 키트',category:'kit',price:34900,image:'kit',badge:'START HERE',description:'보드부터 기본 부품까지, 한 번에 준비하는 첫 실습',specs:['UNO 호환 보드 · 브레드보드','LED · 저항 · 버튼 · 점퍼선 포함','기초 회로 실습용 구성']},
{id:'ultrasonic',name:'HC-SR04 초음파 거리 센서',category:'sensor',price:2500,image:'sensor',badge:'BEST',description:'거리 측정부터 장애물 감지까지',specs:['초음파 송수신 센서','동작 전압 5V','Trig / Echo 신호로 거리 측정']},
{id:'dht',name:'DHT11 온습도 센서 모듈',category:'sensor',price:3900,image:'dht',badge:'',description:'실내 온도와 습도를 읽는 환경 센서',specs:['디지털 온도 및 습도 출력','환경 모니터링 실습용','3핀 모듈 형태']},
{id:'pir',name:'PIR 움직임 감지 센서',category:'sensor',price:4200,image:'pir',badge:'',description:'움직임을 감지하는 스마트 조명 프로젝트',specs:['적외선 기반 인체 움직임 감지','감도 및 지연 조절 가능','디지털 출력']},
{id:'servo',name:'SG90 미니 서보모터',category:'module',price:3200,image:'servo',badge:'',description:'각도를 제어하는 작고 가벼운 모터',specs:['9g급 미니 서보모터','PWM 제어','로봇 및 회전 기구 실습용']},
{id:'oled',name:'0.96인치 OLED 디스플레이',category:'module',price:5900,image:'oled',badge:'DISPLAY',description:'센서 값을 작은 화면에 선명하게',specs:['128 × 64 픽셀','I2C 인터페이스','텍스트 및 그래픽 표시 실습']},
{id:'breadboard',name:'830핀 브레드보드',category:'parts',price:2900,image:'breadboard',badge:'ESSENTIAL',description:'납땜 없이 회로를 만드는 메이커의 기본 도구',specs:['830개 연결 구멍','중앙 분리 홈 및 전원 레일','점퍼선과 함께 사용']},
{id:'led',name:'LED & 저항 실습 세트',category:'parts',price:3500,image:'led',badge:'',description:'작은 불빛 하나로 시작하는 전자회로',specs:['빨강 · 초록 · 노랑 LED 구성','실습용 저항 포함','LED 연결 시 직렬 저항 사용']},
{id:'jumper',name:'점퍼선 40핀 세트',category:'parts',price:1900,image:'wires',badge:'',description:'보드와 부품을 연결하는 컬러 점퍼선',specs:['40핀 컬러 케이블','회로 연결 및 브레드보드 실습','커넥터 타입 선택 없이 예시 구성']}
];
const CATEGORIES={board:'보드',sensor:'센서',module:'모듈',kit:'입문 키트',parts:'부품 & 도구'};
function selectProducts(category='all',query='',sort='popular') {const q=query.trim().toLowerCase();const result=PRODUCTS.filter(p=>(category==='all'||p.category===category)&&(!q||(p.name+' '+p.description+' '+CATEGORIES[p.category]+' '+p.specs.join(' ')).toLowerCase().includes(q)));if(sort==='low')result.sort((a,b)=>a.price-b.price);if(sort==='high')result.sort((a,b)=>b.price-a.price);if(sort==='name')result.sort((a,b)=>a.name.localeCompare(b.name,'ko'));return result;}
function normalizeCart(raw){if(!Array.isArray(raw))return [];const out=[];for(const item of raw){if(!item||!PRODUCTS.some(p=>p.id===item.id)||!Number.isInteger(item.qty)||item.qty<1)continue;const prev=out.find(x=>x.id===item.id);if(prev)prev.qty=Math.min(99,prev.qty+item.qty);else out.push({id:item.id,qty:Math.min(99,item.qty)});}return out;}
function cartTotals(cart){const subtotal=normalizeCart(cart).reduce((sum,item)=>sum+PRODUCTS.find(p=>p.id===item.id).price*item.qty,0);const shipping=subtotal===0||subtotal>=50000?0:3000;return {subtotal,shipping,total:subtotal+shipping};}
if(typeof module!=='undefined')module.exports={PRODUCTS,selectProducts,normalizeCart,cartTotals};
