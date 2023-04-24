export default function Submit() {
    return(
        <form className="submission">
            <h1>Submit a Playground!</h1>

            <input type="text" placeholder="Playground Name" />
            <input type="text" placeholder="Quadrant" />
            <input type="text" placeholder="Address" />
            <input type="text" placeholder="Features" />
            <input type="text" placeholder="Hours" />
            <input type="text" placeholder="Misc. Information" />
        </form>
    );
}