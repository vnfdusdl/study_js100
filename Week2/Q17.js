// // 문제17 : 놀이기구 키 제한
// 유주는 놀이공원 아르바이트 중입니다. 그런데 놀이기구마다 키 제한이 있습니다.
// 유주가 담당하는 놀이기구는 키가 150cm 이상만 탈 수 있습니다.

// 입력으로 키가 주어지면
// 키가 150이 넘으면 YES를 틀리면 NO를 출력하는 프로그램을 작성하세요.

// 박누리 답안
// 이상이면 150 포함인데 키가 150이 넘는건 초과이지 않나는 고민...
let userHieght = prompt("키를 입력하세요"); // let userHieght = "150.1";
console.log(userHieght > 150 ? "YES" : "NO");

// 안소현 답안
// const height = prompt('당신의 키는? (cm단위로 숫자만 입력)');
// const result = height >= 150 ? 'YES' : 'NO';
// console.log(result);