
function errorPage({error}: {error: string}) {
    return (
        <div className="">
            {error}
        </div>
    )
}

export default errorPage

