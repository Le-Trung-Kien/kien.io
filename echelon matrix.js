// đưa ma trận về dạng bậc thang
let Sohang = Number(prompt("số hàng"))      // khai số hàng
let Socot = Number(prompt("số cột"))        // khai số cột
let matrix = []                             // ma trận đề bài
for (var hang = 1; hang <= Sohang; hang++) {            // xét hàng thứ ...
    var arr_hang = []                                   // đặt ban đầu hàng đang ko có gì
    for (var cot = 1; cot <= Socot; cot++) {            // xét cột thứ ...
        arr_hang.push(Number(prompt("phần tử hàng " + hang + " cột " + cot + " là "))) // ghi nhận giá trị điền vào từng cột
    }
    matrix.push(arr_hang)                      // ghi nhận vào ma trận từng hàng
}
// ta được matrix là ma trận nhập vào.



function sapxep(matrix) {  //sắp xếp hình thang matrix
    var a = []                                          // STT của phần tử đầu tiên khác 0 trong từng hàng lần lượt
    var a1 = []                                          // dãy phụ
    var matrix1 = []                                // ma trận phụ   
    for (var hang = 0; hang <= Sohang-1; hang++) {           //điền vào a
        for (var cot = 0; cot <= Socot-1; cot++) {
            if (matrix[hang][cot ] != 0) {
                a.push(cot)
                break
            }
            if(cot == Socot-1 && matrix[hang][cot ] == 0){
                a.push(Socot)
            }
        }
    }
    for (var i = 1; i <= Sohang; i++) {                 // biến a1 và matrix1 thành bản sắp xếp theo dạng bậc thang của a và matrix
        for (var ptu = 0; ptu <= Sohang - 1; ptu++) {      // xét phần tử 
            if (a[ptu] == Math.min.apply(Math, a)) {
                //tìm phần tử đầu tiên = min(a), đẩy phần tử vào a1 và hàng tương ứng vào matrix1
                // sau đó xóa phần tử đã đẩy vào a1 trong a và hàng đã đẩy vào matrix1 trong matrix                        
                a1.push(a[ptu])
                matrix1.push(matrix[ptu])
                a.splice(ptu, 1)
                matrix.splice(ptu, 1)

            }
        }
    }
    return (matrix1)
}


for (var hgoc = 0; hgoc <= Sohang - 1; hgoc++) {            // lấy hàng làm gốc để các hàng dưới trừ đi
    matrix = sapxep(matrix)                          // xếp thứ tự các hàng
    for (var cgoc = 0; cgoc <= Socot - 1; cgoc++) {
        if (matrix[hgoc][cgoc] != 0) {                // phần tử đầu tiên khác 0 của hàng làm gốc
            for (var hang = hgoc + 1; hang <= Sohang - 1; hang++) {
                var k1 = matrix[hang][cgoc]          //hệ số hàng gốc
                var k2 = matrix[hgoc][cgoc]           // hệ số hàng đang xét
                for (var cot = cgoc; cot <= Socot - 1; cot++) {
                    matrix[hang][cot] = matrix[hang][cot] * k2 - matrix[hgoc][cot] * k1
                }
            }
            break
        }
        

    }
}
console.log(matrix)

let rank = 0
for(var hang=0; hang<= Sohang-1; hang++){
    for(var cot = 0; cot<=Socot-1; cot++){
        if(matrix[hang][cot] != 0){
            rank ++
            break
        }
    }
}
console.log("rank của ma trận là "+ rank)
