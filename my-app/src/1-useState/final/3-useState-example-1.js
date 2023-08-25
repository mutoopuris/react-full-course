import React, {useState} from 'react';

const Index = () => {
    const [showData, setShowData] = useState(false);

    const handleChange = () => {
        setShowData(!showData)
    }

    return (
        <>
        <div>
            <button onClick={handleChange}>{showData ? "hide" : "show"}</button>
            {showData ? (
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quia
          quisquam, ullam cupiditate asperiores commodi dolorum. Tempora, ab.
          Molestiae libero quidem ex, dignissimos possimus assumenda itaque
          reiciendis quos voluptate magnam.
                    </div>
            ) : (
                <h3>Data is hidden</h3>
            )
            }
        </div>

        </>
    );
};

export default Index;