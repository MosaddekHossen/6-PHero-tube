const allCategory = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/videos/categories')
    const data = await res.json()
    const buttonContainer = document.getElementById('button-container')
    data.data.forEach(element => {
        const div = document.createElement('div');
        div.innerHTML = `
        <button onclick="handleCard('${element.category_id}')" class="btn">${element?.category}</button>
        `;
        buttonContainer.appendChild(div);
    });
}

const handleCard = async (Id) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${Id}`)
    const data = await res.json()
    const cardContainer = document.getElementById('card-container')
    data.data.forEach((car) => {
        const div = document.createElement('div')
        console.log(car)
        div.innerHTML = `
        <div class="card bg-base-100 shadow-xl mb-5">
            <figure>
                <img src="${car?.thumbnail}" class="h-[200px] rounded-xl" alt="Shoes" />
            </figure>
                <div class="card-footer flex justify-between mt-8">
                    <div class="flex gap-3">
                        <div>
                            <div class="avatar online">
                                <div class="w-14 rounded-full">
                                    <img src=${car?.authors[0].profile_picture} />
                                </div>
                            </div>
                        </div>
                        <div class="mb-5">
                            <h3 class="text-[20px] font-bold">${car?.title}</h3>
                            <h6>${car?.authors[0]?.profile_name}</h6>
                            <small>${car?.others?.views} Views</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
        cardContainer.appendChild(div);
    })
}

allCategory()