document.addEventListener("mousemove", (event) => {
    const cursorCircle = document.getElementById("cursor-circle");
    cursorCircle.style.left = `${event.pageX}px`;
    cursorCircle.style.top = `${event.pageY}px`;
});

async function displayImages(){
    const selectedBreed = document.getElementById("breed").value;

    const apiURL = `https://dog.ceo/api/breed/${selectedBreed}/images`
    try{
        const response = await fetch(apiURL);

        if(!response.ok){
            throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        console.log("data:",data.message);
        if(data.message){
            const images = data.message.slice(0,4);

            const imgContainer = document.getElementById("image-container");
            imgContainer.innerHTML="";

            images.forEach(url => {
                const img = document.createElement("img");
                img.src = url;
                img.alt = selectedBreed;
                img.style.width = "100%";  
                img.style.height = "auto";
                img.className = "img-item";
                imgContainer.appendChild(img);           
            });
        }
        else{
            document.getElementById("image-container").innerHTML = "No images found.";
        }
    }
    catch(error){
        console.error(error);
        document.getElementById("image-container").innerHTML = "Error fetching images."
    }
}


// document.getElementById("select-breed").addEventListener("click", async function(){
//     const selectedBreed = document.getElementById("breed").value;

//     const apiURL = `https://dog.ceo/api/breed/${selectedBreed}/images`
//     try{
//         const response = await fetch(apiURL);

//         if(!response.ok){
//             throw new Error("Failed to fetch data");
//         }

//         const data = await response.json;

//         if(data.message){
//             const images = data.message.slice(0,4);

//             const imgContainer = document.getElementById("Image-container");
//             imgContainer.innerHTML="";

//             images.array.forEach(url => {
//                 const image = document.createElement("img");
//                 img.src = url;
//                 img.alt = selectedBreed;
//                 img.style.width = "150px";  
//                 imgContainer.appendChild(image);           
//             });
//         }
//         else{
//             document.getElementById("image-container").innerHTML = "No images found.";
//         }
//     }
//     catch(error){
//         console.error(error);
//         document.getElementById("image-container").innerHTML = "Error fetching images."
//     }
// })