import Card from '../Card/Card';
import '../CardContainer/CardContainer.scss';

export default function CardContainer() {

    return (
        <section className="container card-container">
            <div className="row gy-5">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />

            </div>
            <h4 className="text-center load-more">Load more</h4>
        </section >
    );
}