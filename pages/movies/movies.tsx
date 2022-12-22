import axios, { AxiosError, AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import { MOVIE_KEY, TARGET_DT } from '../../public/data/variables';

export default function movies() {
    const [movieList, setMovieList] = useState([]);
    const getMovies = async () => {
        await axios.get(`http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${MOVIE_KEY}&targetDt=${TARGET_DT}`)
            .then((res: AxiosResponse) => {
                const dailyBoxOfficeList = res.data.boxOfficeResult.dailyBoxOfficeList;
                setMovieList(dailyBoxOfficeList);
                console.log(dailyBoxOfficeList)
            }).catch((error: AxiosError) => console.log(error));
    }
    useEffect(() => {
        getMovies();
    }, []);
    return (
        <div>    
            <ul>
            {
                    movieList.map((el: any, idx: number) => <li key={idx}>{el.movieNm}</li>)
            }
            </ul>
        </div>
    );
}