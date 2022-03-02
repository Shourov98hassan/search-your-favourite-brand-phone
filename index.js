const searchPhone = () =>{
    const searchField = document.getElementById('search-field');
    const searchFieldText = searchField.value;
    // console.log(searchFieldText);
    searchField.value = '';
    if(searchFieldText == ''){
        alert('please write something first,then you will click search button!');
    }
    else{
        const url = (`https://openapi.programming-hero.com/api/phones?search=${searchFieldText}`);
        // console.log(url);
    
        fetch(url)
        .then(res => res.json())
        .then(data => displayPhone(data.data));

    }

   


}

const displayPhone = phones =>{
    const phoneLimits= (phones.slice(0,20));
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
    if(phones.length ==0){
        alert("no item found");
    }
    // for(const phone of phones){
    //     console.log(phone);
    // }
    console.log(phones);
    phoneLimits.forEach(phone =>{
        // console.log(phone);
     
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-100">
        <img src="${phone.image}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">Phone Model: ${phone.phone_name}</h5>
        <h6>Phone Brand: ${phone.brand}</h6>
        <button onclick = "loadPhoneDetails('${phone.slug}')">More Details</button>
        </div>
      </div> 
        `;
        searchResult.appendChild(div);
        

      


    });

}

const loadPhoneDetails = detail =>{
    const url = (`https://openapi.programming-hero.com/api/phone/${detail}`)

    // const url = (`https://openapi.programming-hero.com/api/phones?search=${detail}`);
    console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data =>displayPhoneDetails(data.data));

   
    // const url = `https://openapi.programming-hero.com/api/phone/apple_iphone_13_pro_max-11089`

    
}

const displayPhoneDetails = datas =>{
    
    console.log(datas);
    const phoneDetails = document.getElementById('phone-details');
    phoneDetails.textContent = '';
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML =`
    <img src="${datas.image}" class="card-img-top" alt="...">
    <h5>Phone Model: ${datas.name}</h5>
    <h6>Release Date: ${datas?.releaseDate?datas.releaseDate:'Release date not found'}</h6>
    <p>Storage: ${datas.mainFeatures.storage}</p>
    <p>Chipset: ${datas.mainFeatures.chipSet}</p>
    <p>Display: ${datas.mainFeatures.displaySize}</p>
    <h6>Others</h6>
    <p>Others: ${datas?.others?.WLAN? datas.others.WLAN: `not found`}</p>
    <p>Bluetooth: ${datas?.others?.Bluetooth? datas.others.Bluetooth:`not found`}</p>
    <p>GPS: ${datas?.others?.GPS? datas.others.GPS: `not found`}</p>
    <p>NFC: ${datas?.others?.NFC? datas.others.NFC: `not found`}</p>
    <p>Radio: ${datas?.others?.Radio? datas.others.Radio: `not found`}</p>
   
    `;
    phoneDetails.appendChild(div);
    

   
}
 

