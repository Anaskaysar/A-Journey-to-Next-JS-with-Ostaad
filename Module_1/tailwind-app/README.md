- Next NP Progress Bar
- searchParams to catch parameters fromm link and query - we have to pass {searchParams} as object to function for catching the data from the link query component. 
// const Page = ({searchParams}) => {
//     return (
//         <div>
//             <h1>{searchParams.name}</h1>
//          </div>)
//}


- useSearchparams - we don't have to pass any parameters. We can declare a variable and catch the data using that variable.
    ##### const params = useSearchParams();
    ##### {params.key_name}

- replace
- prefetch
- useRouter must be imported from navigation