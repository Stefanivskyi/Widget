
function tes() {

    var a = document.getElementById('arrow');
    var b = document.getElementById('calculationArea');

    a.classList.toggle("rotate");
    b.classList.toggle("hide");
}

document.querySelector("#titleInput").addEventListener("input", function (e) {
    var inp = document.getElementById("titleInput");
    var trCheck = document.querySelectorAll("#myTable>tbody>tr");
    _this = this;
    Array.prototype.slice.call(trCheck, 0).map(function (e) {
        if (_this.value === e.children[0].innerHTML) {
            alert("Please, use customized text! (Name error)");
            inp.value = "";
        }
    })
}, false);

function newElement() {

    var tr = document.createElement("tr");
    var tdLeft = document.createElement("td");
    var tdRight = document.createElement("td");
    tr.appendChild(tdLeft);
    tr.appendChild(tdRight);
    var titleValue = document.getElementById("titleInput").value;
    var amountValue = document.getElementById("amountInput").value;
    var title = document.createTextNode(titleValue);
    var amount = document.createTextNode(amountValue);
    tdLeft.appendChild(title);
    tdRight.appendChild(amount);

    if (amountValue === '' && titleValue === '') {
        alert("You must write something! (error)");
    } else if (titleValue === '') {
        alert("Name error, be more attentive");
    } else if (amountValue === '') {
        alert("Cost error, be more attentive");
    } else {
        document.getElementById("myBody").appendChild(tr);
    }
    document.getElementById("titleInput").value = "";
    document.getElementById("amountInput").value = "";

    var sumDiv = 0;
    $('tr td:nth-child(even)').each(function () {
        var html = $(this).text();
        sumDiv += Number(html);
    });
    console.log(sumDiv);
    document.getElementById('out').innerHTML = "$ " + sumDiv.toFixed(2);
}


function sortTable() {

    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("myTable");
    switching = true;

    while (switching) {
        switching = false;
        rows = table.getElementsByTagName("TR");

        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("TD")[0];
            y = rows[i + 1].getElementsByTagName("TD")[0];

            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
}


function Dropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (e) {
    if (!e.target.matches('.dropbtn')) {
        var myDropdown = document.getElementById("myDropdown");
        if (myDropdown.classList.contains('show')) {
            myDropdown.classList.remove('show');
        }
    }
};


$("#titleInput").keyup(function () {
    var nameValidation = /^[a-zA-Z\s]+$/;
    if (nameValidation.test(this.value) !== true)
        this.value = this.value.replace(/[^a-zA-Z\s]+$/, '');
});


