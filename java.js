function hello(Name){
    if(typeof Name =='string'){
        console.log(" Hello"+Name)
    }else{
        console.log("Please")
    }
}
// Biến trong javascrip
var a=1, b=1;
var c=a+b;
console.log(c)
// kiểu dữ liệu trong javascrip
// +Number:
var a1=1;
var a2=3
// Lưu ý : khi khai báo biến số  không được viết số  trước chữ  phải nếu chữ viết 2 chữ trở lên cần phải kèm theo dấu - hoặc _
// +String:
 var str1="Hello "
 var str2= "hello 2"
 console.log(str2);
//   lưu ý trường hợp có kí tự đặt biệt đi kèm với tên chuỗi
//   vd:
var str3="I\'m Tân "
console.log(str3);
// đấy được gọi là escape a charter
// +Boolean:
var a=true
var b=false
console.log(a);
// Specical type:
// +undefined:
    var a;
    a=100;
    console.log(a);
 // khai  báo a mà không có giá trị gì người ta gọi là undefined
// +null
var a=null;
console.log(a);
// Reference type


// Object
var myBestFriend={
    name:"Tan",// thuộc tính phải :
    age:"22",
    gioitinh:true
};
  console.log(myBestFriend.name); // truy xuất tới thuộc tính name
    myBestFriend[ 'name']="abc"  //truy xuất tới thuộc tính name và thây đổi chúng thành abc phải truyền vào đó là 1 chuổi
    console.log(myBestFriend);
// lưu ý : khai báo tên biến viết thường chữ cái đầu  chữ tiếp theo sẽ viết hoa  biến tiếp theo bằng dấu , 
//  lúc in ra kết quả    tên  Object . tên biến
// Array
var mybestfriend1 ={
    name:"tan1",
    age:"22",
    gioitinh:true
};
var mybestfriend2 ={
    name:"tan2",
    age:"22",
    gioitinh:true
};
var mybestfriend3={
    name:"tan3",
    age:"22",
    gioitinh:true
};
myBestFriend=[mybestfriend1,mybestfriend2,mybestfriend3] //mảng của từng object
console.log(mybestfriend3);
// thay đổi Object
var myBestFriend4={
    name:"tan4",
    age:"22",
    gioitinh:true
};
myBestFriend[0]= myBestFriend4;
console.log(myBestFriend);
//  test lại
var myban={
    ten:"abc",
    tuoi:"23"

};
myban['ten']="xyz";
console.log(myban);
// Khai báo , gán ,hiển thị
//funtion
function ecophailacongaikhong(){
    if( emlacongai){
        alert("emlacongia")
    }else{
        alert("e khong phải là con gái");
    }
}
// var xuong={
//     wieight :0.5
// };
// var eat={
//     wieight:5
// };
// function choanxuong(eat){
//    xuong.wieight= eat.wieight+xuong.wieight;
  
// }

// console.log( "cho trc khi gặm xuong "+ xuong.wieight)
// choanxuong(eat);
// console.log("chó sau khi gặp xương" + xuong.wieight)
var xuong={
    wieight:5
};
var xongcong={
    wieight:0.5
};
function chosaukhigam(xongcong){
    xuong.wieight=xuong.wieight+xongcong.wieight;
}
console.log("cho trước khi gam xuong"+ xuong.wieight)
chosaukhigam(xongcong);
console.log("cho sau khi gặm xương" +xuong.wieight)