function baiTap1() {
    let vLy = +prompt("Nhập điểm vật lý: ");
    let hoa= +prompt("Nhập điểm hóa học: ");
    let sinhHoc = +prompt("Nhập điểm sinh học: ");
    let dtb = (vLy + hoa + sinhHoc)/3;
    let tong = vLy + hoa + sinhHoc;
    eLement1 = document.getElementById("dtb");
    eLement1.value = dtb;
    eLement2 = document.getElementById("tong");
    eLement2.value = tong;
}
function baiTap2() {
    let doC = +prompt("Nhập độ C muốn quy đổi: ");
    let doF = (doC/5) * 9 + 32;
    eLement = document.getElementById("doF");
    eLement.value = doF;
}
function baiTap3() {
    let r = +prompt("Nhập bán kính hình tròn: ");
    let s = r * r * 3.14;
    eLement = document.getElementById("s");
    eLement.value = s;
}
function baiTap4() {
    let r = +prompt("Nhập bán kính hình tròn: ");
    let p = r*2 * 3.14;
    eLement = document.getElementById("p");
    eLement.value = p;
}
