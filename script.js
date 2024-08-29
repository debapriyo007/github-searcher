
let userInput = document.querySelector(".container .search-box input");
let infoBox = document.querySelector(".container .info-box");

userInput.addEventListener("keyup", (e)=>{
    if(userInput.value != '' && e.key == "Enter"){
        getData(userInput.value);
    }
})

let getData = (username)=>{
    let url  =  `https://api.github.com/users/${username}`; //github api

    fetch(url).then((res) => res.json()).then((data)=>{
        if(data.Response = 'True'){
            const dateData = data.created_at.slice(0, data.created_at.length - 10);
            
            const location = data.location === "" ||  data.location === null ? "No location" : data.location;

            const website = data.blog === "" ||  data.blog === null ? 'No Website' : data.blog;

            const twitter = data.twitter_username === " " ||  data.twitter_username === null ? " Not X" : data.twitter_username;

            const company = data.company === "" ||  data.company === null ? ' No Company' : data.company;


            const bio = data.bio === "" ||  data.bio === null ? 'This profile has no bio' : data.bio;

            infoBox.innerHTML =`
            <div class="user-details">
                <div class="img-box">
                    <img src="${data.avatar_url}" alt="">
                </div>
                <div class="details">
                    <h3 class="name">${data.name}</h3>
                    <h3 class="username">@${data.login}</h3>
                    <span class="join-date">${dateData}</span>
                </div>
                <p class="bio">${bio}</p>
                <div class="user-profile">
                    <div class="repo">
                        <h2>${data.public_repos}</h2>
                        <span>Repo</span>
                    </div>
                    <div class="followers">
                        <h2>${data.followers}</h2>
                        <span>Followers</span>
                    </div>
                    <div class="following">
                        <h2>${data.following}</h2>
                        <span>Following</span>
                    </div>
                </div>
                <div class="user-other-details"> 
                    <p><i class="fa-solid fa-building"></i> ${company}</p>
                    <p><i class="fa-solid fa-location-pin"></i> ${location}</p>
                    <p><i class="fa-solid fa-link"></i> ${website}</p>
                    <p><i class="fa-brands fa-x-twitter"></i> ${twitter}</p>
                </div>
            </div>
            
            
            `
        }
    })
}


getData("git")