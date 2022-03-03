import '../Card/Card.scss';
export default function Card() {

    return (

        <div className="card col-lg-4 col-md-6 col-sm-12">
            <div className='imagen'></div>
            <div className="card-body">
                <img className='rounded-circle' src='https://masterderechopenaluam.com/wp-content/uploads/2020/07/alumniPNG.jpg' alt='foto de perfil' />
                <div className='cardFooter rounded'>
                    <h3>Sam Jerremy</h3>
                    <span>#dayAtTheBeach</span>
                </div>
            </div>
        </div>

    );
}