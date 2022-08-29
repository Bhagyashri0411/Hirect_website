<template>
    <select>
        <option>Apple</option>
        <option>Banana</option>
        <option>Cherry</option>
        <option>Dewberry</option>
    </select>
    <!-- <div class="dropdown show">
        <a class="btn btn-secondary dropdown-toggle" role="button" id="dropdownMenuLink" data-toggle="dropdown"
            aria-haspopup="true" aria-expanded="false">
            Dropdown link
        </a>

        <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
        </div>
    </div> -->
</template>

<style lang="scss" scoped>
.blog-banner {
    margin-bottom: 70px;
}

.catagory-bar {
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    cursor: pointer;
}

.catagory-bar .dropdown-menu-item {
    padding: 25px 40px;
    position: relative;
    text-align: center;
    display: flex;
    transition: 0.4s;
}

// .catagory-bar .dropdown-menu-item.active,
// .catagory-bar .dropdown-menu-item :hover {
//   background-color: #2ce2a2;
//   border-bottom-color: #bb3030;
// }
.catagory-bar .dropdown-menu-item a {
    color: inherit;
    text-decoration: none;
}

.main-head {
    margin-left: 10%;
    margin-top: 15%;
    font-weight: bold;
}

@media only screen and (min-width: 481px) and (max-width: 768px) {
    .catagory-bar {
        background-color: #ffffff;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        cursor: pointer;
        flex-wrap: nowrap;
        margin-top: 45px;
        overflow-x: scroll;
    }

    .catagory-bar .dropdown-menu-item {
        padding: 20px 15px;
        position: relative;
        text-align: center;
        display: flex;
        transition: 0.4s;
        border: 0;
    }

    // .catagory-bar .dropdown-menu-item.active,
    // .catagory-bar .dropdown-menu-item :hover {
    //   background-color: #2ce2a2;
    //   border-bottom-color: #bb3030;
    // }
    .catagory-bar .dropdown-menu-item a {
        color: inherit;
        text-decoration: none;
    }
}

@media only screen and (min-width: 320px) and (max-width: 480px) {
    .catagory-bar {
        background-color: #ffffff;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        cursor: pointer;
        flex-wrap: nowrap;
        margin-top: 45px;
        overflow-x: scroll;
    }

    .catagory-bar .dropdown-menu-item {
        padding: 15px 15px;
        position: relative;
        text-align: center;
        display: flex;
        transition: 0.4s;
        border: 0;
    }

    // .catagory-bar .dropdown-menu-item.active,
    // .catagory-bar .dropdown-menu-item :hover {
    //   background-color: #2ce2a2;
    //   border-bottom-color: #bb3030;
    // }
    .catagory-bar .dropdown-menu-item a {
        color: inherit;
        text-decoration: none;
    }
}
</style>