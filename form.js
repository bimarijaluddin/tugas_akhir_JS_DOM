function buat_login(){
	//Membuat tombol daftar menghilang
	let tombol_daftar = document.getElementById('x');
	tombol_daftar.parentElement.removeChild(tombol_daftar);

	//Membuat tulisan setelah silahkan login
	let p = document.createElement('p');
	p.className = 'tulisan_login';
	p.innerHTML = 'silahkan login';

	//Memasukkan element p ke dalam div agar muncul
	let element_div = document.getElementsByTagName('div')[0];
	element_div.appendChild(p);

	//Membuat form dan memasukkannya ke dalam div
	let form = document.createElement('form');
	element_div.appendChild(form);

	//Membuat label username dan memasukkannya ke dalam form
	let nama_user = document.createElement('label');
	nama_user.innerHTML = 'Nama User : ';
	form.appendChild(nama_user);

	//Membuat input text untuk nama user
	let input_nama = document.createElement('input')
	input_nama.type = 'text';
	input_nama.name = 'nama_user';
	input_nama.className = 'form_login';
	input_nama.placeholder = 'Nama User ...';
	form.appendChild(input_nama);

	//Membuat label No Handphone
	let nomorHandphone = document.createElement('label');
	nomorHandphone.innerHTML = 'Nomor Handphone :';
	form.appendChild(nomorHandphone);

	//Membuat input text untuk No handphone
	let input_nohp = document.createElement('input')
	input_nohp.type = 'number';
	input_nohp.name = 'nohp';
	input_nohp.className = 'form_login';
	input_nohp.placeholder = 'Nomor Handphone';
	form.appendChild(input_nohp);

	//Membuat label username
	let username = document.createElement('label');
	username.innerHTML = 'Username :';
	form.appendChild(username);

	//Membuat input text untuk username
	let input_username = document.createElement('input');
	input_username.type = 'text';
	input_username.name = 'username';
	input_username.className = 'form_login';
	input_username.placeholder = 'username atau email..';
	form.appendChild(input_username);

	//Membuat label password
	let password = document.createElement('password');
	password.innerHTML = 'Password :';
	form.appendChild(password);

	//Membuat input text untuk password;
	let input_password = document.createElement('input');
	input_password.type = 'password';
	input_password.name = 'password';
	input_password.className = 'form_login';
	input_password.placeholder = 'Password..';
	form.appendChild(input_password);

	//tombol daftar sekarang
	let tombol = document.createElement('input');
	tombol.type = 'submit';
	tombol.value = 'DAFTAR SEKARANG';
	tombol.name = 'daftarsekarang';
	tombol.className = 'tombol_login';
	form.appendChild(tombol);

}