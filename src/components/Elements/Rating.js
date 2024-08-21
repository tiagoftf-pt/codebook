
export const Rating = ({rating}) => {

    let ratingArray = Array(5).fill(false)

    for(let i=0; i<rating; i++){
        ratingArray[i]=true;
    }

  return (
        <>
            <i className={`text-lg bi ${ratingArray[0]? `bi-star-fill` : `bi-star`}  text-yellow-500 mr-1`}></i>
            <i className={`text-lg bi ${ratingArray[1]? `bi-star-fill` : `bi-star`}  text-yellow-500 mr-1`}></i>
            <i className={`text-lg bi ${ratingArray[2]? `bi-star-fill` : `bi-star`}  text-yellow-500 mr-1`}></i>
            <i className={`text-lg bi ${ratingArray[3]? `bi-star-fill` : `bi-star`}  text-yellow-500 mr-1`}></i>
            <i className={`text-lg bi ${ratingArray[4]? `bi-star-fill` : `bi-star`}  text-yellow-500 mr-1`}></i>
        </>
)
}
