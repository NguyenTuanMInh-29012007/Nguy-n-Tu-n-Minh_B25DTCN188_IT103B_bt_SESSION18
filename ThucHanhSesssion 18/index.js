
let contactTbody = document.getElementById("contact-tbody");
let nameInput = document.getElementById("contact-name");
let phoneInput = document.getElementById("contact-phone");
let emailInput = document.getElementById("contact-email");
let btn = document.querySelector(".btn-add");

let users = [
    {id:1, name: "Nguyen Van A", phone: "0123456789", email: "nva@gmail.com"},
    {id:2, name: "Tran Van B", phone: "0928345978", email: "tvb@gmail.com"},
    {id:3, name: "Le thi C", phone: "0982374589", email: "ltc@gmail.com"},
];

let renderList = () => {
    let html = "";
    users.forEach((user) => {
        html += `
            <tr>
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.phone}</td>
                <td>${user.email}</td>
                <td>
                  <div class="action-buttons">
                    <button class="btn-edit">Sửa</button>
                    <button class="btn-delete">Xóa</button>
                  </div>
                </td>
              </tr>
        `;
    });
    contactTbody.innerHTML = html;
}
renderList();

btn.addEventListener("click", () => {
    let name = nameInput.value.trim();
    if(name === ""){
        alert("Khong duoc de trong!");
        return;
    }

    let phone = +phoneInput.value;
    if(!phone){
        alert("So dien thoai nhap khong hop le!");
        return;
    }

    let email = emailInput.value.trim();
    if(email === "" || !email){
        alert("Email khong hop  le!");
        return;
    }

    let newUser = {
        id: users.length + 1,
        name,
        phone,
        email,
    }

    users.push(newUser);

    renderList();

    alert("Them thanh cong!");

    nameInput.value = "";
    phoneInput.value = "";
    emailInput.value = ""
})
