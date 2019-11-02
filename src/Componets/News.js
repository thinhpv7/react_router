import React, { Component } from 'react';
import NewsItem from './NewsItem';
import dl from './Dulieu'


class News extends Component {
    render() {

        // var so = [1,3,3,4,5,6];
        // var so2 = so.map((value, key) => value * 2);
        // console.log(so2);

       
        return (
            
            <div>
                <div>
                    <header className="masthead tintuc">
                        <div className="container h-100">
                        <div className="row h-100">
                            <div className="col-lg-12 my-auto">
                            <div className="header-content mx-auto">
                                <h1 className="mb-1 text-center">Danh sách tin tức</h1>
                            </div>
                            </div>
                        </div>
                        </div>
                    </header>
                        {/* begin tin tuc */}
                        <div className="container">
                            <div className="row mt-3">

                                {
                                     dl.map((value, key) => (
                                        <NewsItem 
                                        key = {key}
                                        tinId = {value.id}
                                        anh = {value.anh}
                                        tieuDe = {value.tieuDe} 
                                        noiDung = {value.noiDung}
                                        >
                                        </NewsItem>
                                   ))
                                }
                                

                            </div>
                        </div>
                        {/* end tin tuc */}
                    </div>
            </div>
        );
    }
}

export default News;