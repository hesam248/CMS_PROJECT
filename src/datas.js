let xAxisData = [

    {
        'name' : 'jan',
        'Sale' : 145_000
    },
    {
        'name' : 'feb',
        'Sale' : 195_000
    },
    {
        'name' : 'mar',
        'Sale' : 78_000
    },
    {
        'name' : 'apr',
        'Sale' : 32_000
    },
    {
        'name' : 'may',
        'Sale' : 60_000
    },
    {
        'name' : 'jun',
        'Sale' : 87_000
    },
    {
        'name' : 'jul',
        'Sale' : 34_000
    },
    {
        'name' : 'agu',
        'Sale' : 23_000
    },
    {
        'name' : 'sep',
        'Sale' : 18_000
    },
    {
        'name' : 'oct',
        'Sale' : 185_000
    },
    {
        'name' : 'nov',
        'Sale' : 65_000
    },
    {
        'name' : 'des',
        'Sale' : 50_000
    },
]

const newUser = [
    {
        id:1,
        username : 'hesam',
        title : 'web dev',
        img : '../src/image/1600w-5MVEQt0eQ1A.webp'
    },
    {
        id:2,
        username : 'ali',
        title : 'police',
        img : '../src/image/1600w-5MVEQt0eQ1A.webp'
    },
    {
        id:3,
        username : 'hossein',
        title : 'treader',
        img : '../src/image/1600w-5MVEQt0eQ1A.webp'
    }
]

const transactions = [
    {
        id:1,
        costumer : 'hesamu',
        Date : '12 MAy 2024',
        Amount : '$1383',
        Status : 'Approved'
    },
    {
        id:2,
        costumer : 'ali',
        Date : '19 Dec 2024',
        Amount : '$1832',
        Status : 'Pending'
    },
    {
        id:3,
        costumer : 'hossein',
        Date : '22 Sep 2024',
        Amount : '$963',
        Status : 'Declined'
    }
]

let userRows = [

    {
        id:1,
        username : 'hesam',
        avatar : '../src/image/1600w-5MVEQt0eQ1A.webp',
        Status : 'Active',
        transaction : '$652_000',
        email:'hesam248@gmail.com'
    },

    {
        id:2,
        username : 'ali',
        avatar : '../src/image/1600w-5MVEQt0eQ1A.webp',
        Status : 'Active',
        transaction : '$999_000',
        email:'ali@gmail.com'
    },

    {
        id:3,
        username : 'hossein',
        avatar : '../src/image/1600w-5MVEQt0eQ1A.webp',
        Status : 'Active',
        transaction : '$826_000',
        email:'hossein0032@gmail.com'
    },

    {
        id:4,
        username : 'mohamad',
        avatar : '../src/image/1600w-5MVEQt0eQ1A.webp',
        Status : 'Deactive',
        transaction : '$52_000',
        email:'mohamad@gmail.com'
    },

]

const product = [
    {
       id:1,
       Brand:'Apple',
       year:'2019',
       available:'existing',
       img:'../src/image/1600w-5MVEQt0eQ1A.webp'
    },
    {
       id:2,
       Brand:'Asus',
       year:'2023',
       available:'existing',
       img:'../src/image/1600w-5MVEQt0eQ1A.webp'
    },
    {
       id:3,
       Brand:'Dell',
       year:'2012',
       available:'existing',
       img:'../src/image/1600w-5MVEQt0eQ1A.webp'
    },
    {
       id:4,
       Brand:'Hp',
       year:'2025',
       available:'not available',
       img:'../src/image/1600w-5MVEQt0eQ1A.webp'
    },
]

export {xAxisData ,newUser,transactions,userRows,product}