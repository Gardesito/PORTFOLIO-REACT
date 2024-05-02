import "./styles.css";
const Rain = () => {
    return (
        <>
        <section className="rainMain">
            {[...Array(200)].map((_, i) => (
            <i key={i} className="rain"></i>
            ))}
        </section>
        </>
    );
    };

export default Rain;