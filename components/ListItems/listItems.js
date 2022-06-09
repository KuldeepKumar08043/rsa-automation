// import Image from 'next/image';
import styles from '../../styles/Home.module.css';
// import ImagePath from '../../public/assets/images';

const ListItems = ({ listData }) => {

    return (
        <div className={styles.mainListItems}>
            <div className="card">
                <img src={`./assets/images/${listData.itemImage}`} className="card-img-top" alt="..." />
                {/* <Image src={`${ImagePath}/${listData.itemImage}`} layout="fill" className="card-img-top"  alt='Banner Image' /> */}
                <div className="card-body">
                    <h5 className="card-title">{listData.name}</h5>
                    <p className="card-text">{listData.username}</p>
                    <p className="card-text"><b>{listData.price}</b></p>
                </div>
            </div>
        </div>
    )
}

export default ListItems;