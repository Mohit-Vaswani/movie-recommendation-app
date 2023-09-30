import React from "react";

interface MovieRecommendationProps {
    recommendation: Array<{id: number, title: string}>;
}

const MovieRecommendation: React.FC<MovieRecommendationProps> = ({recommendation}) => {
    return(
        <div>
            <h2>Movies Recommendation</h2>
            <ul>
                {recommendation.map((recommendmovie) => (
                    <li key={recommendmovie.id}>
                        {recommendmovie.title}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default MovieRecommendation;