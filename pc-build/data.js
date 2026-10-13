const CATS=[['cpu','CPU','▣'],['gpu','그래픽카드','▤'],['board','메인보드','▦'],['ram','메모리','▥'],['ssd','SSD','▰'],['psu','파워','⚡'],['case','케이스','▧'],['cooler','쿨러','◉']];
const PARTS=[
{id:'r7600',cat:'cpu',name:'AMD Ryzen 5 7600',brand:'AMD',price:215000,spec:'6코어 · 12스레드 · AM5',socket:'AM5',power:90},
{id:'r7700',cat:'cpu',name:'AMD Ryzen 7 7700',brand:'AMD',price:315000,spec:'8코어 · 16스레드 · AM5',socket:'AM5',power:90},
{id:'i14400',cat:'cpu',name:'Intel Core i5-14400F',brand:'Intel',price:225000,spec:'10코어 · 16스레드 · LGA1700',socket:'LGA1700',power:150},
{id:'rtx4060',cat:'gpu',name:'GeForce RTX 4060 8GB',brand:'NVIDIA',price:395000,spec:'VRAM 8GB · PCIe · 1080p 구성 예시',power:120},
{id:'rtx4070',cat:'gpu',name:'GeForce RTX 4070 SUPER 12GB',brand:'NVIDIA',price:850000,spec:'VRAM 12GB · PCIe · 1440p 구성 예시',power:230},
{id:'rx7600',cat:'gpu',name:'Radeon RX 7600 8GB',brand:'AMD',price:335000,spec:'VRAM 8GB · PCIe · 1080p 구성 예시',power:170},
{id:'b650',cat:'board',name:'B650M 메인보드 (DDR5)',brand:'AMD 플랫폼',price:155000,spec:'AM5 · DDR5 · Micro-ATX',socket:'AM5',memory:'DDR5',form:'mATX'},
{id:'b760',cat:'board',name:'B760M 메인보드 (DDR5)',brand:'Intel 플랫폼',price:155000,spec:'LGA1700 · DDR5 · Micro-ATX',socket:'LGA1700',memory:'DDR5',form:'mATX'},
{id:'b760d4',cat:'board',name:'B760M 메인보드 (DDR4)',brand:'Intel 플랫폼',price:125000,spec:'LGA1700 · DDR4 · Micro-ATX',socket:'LGA1700',memory:'DDR4',form:'mATX'},
{id:'ddr5-16',cat:'ram',name:'DDR5-5600 16GB 키트',brand:'예시 메모리',price:65000,spec:'8GB × 2 · DDR5 · 듀얼채널',memory:'DDR5'},
{id:'ddr5-32',cat:'ram',name:'DDR5-6000 32GB 키트',brand:'예시 메모리',price:125000,spec:'16GB × 2 · DDR5 · 듀얼채널',memory:'DDR5'},
{id:'ddr4-32',cat:'ram',name:'DDR4-3200 32GB 키트',brand:'예시 메모리',price:85000,spec:'16GB × 2 · DDR4 · 듀얼채널',memory:'DDR4'},
{id:'ssd500',cat:'ssd',name:'NVMe PCIe 4.0 SSD 500GB',brand:'예시 스토리지',price:55000,spec:'500GB · M.2 2280 · PCIe 4.0'},
{id:'ssd1',cat:'ssd',name:'NVMe PCIe 4.0 SSD 1TB',brand:'예시 스토리지',price:95000,spec:'1TB · M.2 2280 · PCIe 4.0'},
{id:'ssd2',cat:'ssd',name:'NVMe PCIe 4.0 SSD 2TB',brand:'예시 스토리지',price:165000,spec:'2TB · M.2 2280 · PCIe 4.0'},
{id:'psu550',cat:'psu',name:'550W 80 PLUS Bronze 파워',brand:'예시 파워',price:55000,spec:'정격 550W · ATX · Bronze',watts:550},
{id:'psu650',cat:'psu',name:'650W 80 PLUS Bronze 파워',brand:'예시 파워',price:75000,spec:'정격 650W · ATX · Bronze',watts:650},
{id:'psu750',cat:'psu',name:'750W 80 PLUS Gold 파워',brand:'예시 파워',price:115000,spec:'정격 750W · ATX · Gold',watts:750},
{id:'case-mini',cat:'case',name:'컴팩트 Micro-ATX 케이스',brand:'예시 케이스',price:45000,spec:'Micro-ATX 지원 · 미니타워',forms:['mATX']},
{id:'case-air',cat:'case',name:'메시 에어플로우 미들타워',brand:'예시 케이스',price:65000,spec:'ATX / Micro-ATX 지원 · 메시 전면',forms:['ATX','mATX']},
{id:'case-glass',cat:'case',name:'강화유리 미들타워 케이스',brand:'예시 케이스',price:95000,spec:'ATX / Micro-ATX 지원 · 강화유리',forms:['ATX','mATX']},
{id:'cool-basic',cat:'cooler',name:'싱글타워 공랭 쿨러',brand:'예시 쿨러',price:25000,spec:'AM5 / LGA1700 장착 키트',sockets:['AM5','LGA1700']},
{id:'cool-dual',cat:'cooler',name:'듀얼타워 공랭 쿨러',brand:'예시 쿨러',price:55000,spec:'AM5 / LGA1700 장착 키트',sockets:['AM5','LGA1700']},
{id:'cool240',cat:'cooler',name:'240mm 일체형 수랭 쿨러',brand:'예시 쿨러',price:85000,spec:'240mm 라디에이터 · 장착 공간 확인 필요',sockets:['AM5','LGA1700']}
];
const PRESETS=[{id:'entry',label:'01 / ESSENTIAL',name:'가볍게 시작하는 PC',desc:'문서 작업과 코딩, 기본 게임을 위한 구성 예시',tag:'1080p · 기본 구성',parts:['r7600','rx7600','b650','ddr5-16','ssd500','psu550','case-mini','cool-basic']},{id:'balanced',label:'02 / BALANCED',name:'균형 잡힌 게이밍 PC',desc:'게임과 일상 작업을 함께 고려한 구성 예시',tag:'1080p · 32GB RAM',parts:['i14400','rtx4060','b760','ddr5-32','ssd1','psu650','case-air','cool-dual']},{id:'creator',label:'03 / PERFORMANCE',name:'넉넉한 작업용 PC',desc:'그래픽 작업과 멀티태스킹을 위한 구성 예시',tag:'1440p · 2TB SSD',parts:['r7700','rtx4070','b650','ddr5-32','ssd2','psu750','case-glass','cool-dual']}];
function normalizeBuild(raw){const result={};if(!raw||typeof raw!=='object'||Array.isArray(raw))return result;for(const [cat,id]of Object.entries(raw)){const p=PARTS.find(p=>p.id===id&&p.cat===cat);if(p)result[cat]=id;}return result;}
function selectedParts(build){return CATS.map(([cat])=>PARTS.find(p=>p.id===build[cat]&&p.cat===cat)).filter(Boolean);}
function buildTotal(build){return selectedParts(build).reduce((s,p)=>s+p.price,0);}
function filterParts(cat='all',query='',sort='default'){const q=query.trim().toLowerCase();const a=PARTS.filter(p=>(cat==='all'||p.cat===cat)&&(!q||(p.name+' '+p.brand+' '+p.spec).toLowerCase().includes(q)));if(sort==='low')a.sort((x,y)=>x.price-y.price);if(sort==='high')a.sort((x,y)=>y.price-x.price);return a;}
function fromPreset(id){const preset=PRESETS.find(p=>p.id===id);return preset?Object.fromEntries(preset.parts.map(id=>{const p=PARTS.find(p=>p.id===id);return[p.cat,id];})):{};}
function checkBuild(build){const p=Object.fromEntries(selectedParts(build).map(p=>[p.cat,p]));const checks=[];const add=(kind,text)=>checks.push({kind,text});if(p.cpu&&p.board)add(p.cpu.socket===p.board.socket?'ok':'error',p.cpu.socket===p.board.socket?'CPU와 메인보드 소켓 일치':'CPU와 메인보드 소켓이 달라요.');if(p.ram&&p.board)add(p.ram.memory===p.board.memory?'ok':'error',p.ram.memory===p.board.memory?'메모리 규격 일치':'메인보드와 메모리의 DDR 규격이 달라요.');if(p.board&&p.case)add(p.case.forms.includes(p.board.form)?'ok':'error',p.case.forms.includes(p.board.form)?'메인보드 폼팩터 지원':'케이스가 메인보드 폼팩터를 지원하지 않아요.');if(p.cpu&&p.cooler)add(p.cooler.sockets.includes(p.cpu.socket)?'ok':'error',p.cooler.sockets.includes(p.cpu.socket)?'쿨러 소켓 장착 키트 일치':'CPU 쿨러의 장착 소켓을 확인하세요.');if(p.cpu&&p.gpu&&p.psu){const estimate=Math.ceil((p.cpu.power+p.gpu.power+80)*1.35/50)*50;add(p.psu.watts>=estimate?'ok':'warning',p.psu.watts>=estimate?`단순 전력 여유 계산: ${estimate}W 이상 확보`:`단순 계산상 ${estimate}W 이상 파워를 고려하세요.`);}if(Object.keys(p).length<8)add('info',`${8-Object.keys(p).length}개 카테고리가 아직 비어 있어요.`);if(p.cooler?.id==='cool240')add('warning','240mm 라디에이터 장착 공간을 따로 확인하세요.');return checks;}
if(typeof module!=='undefined')module.exports={PARTS,PRESETS,CATS,normalizeBuild,selectedParts,buildTotal,filterParts,fromPreset,checkBuild};
