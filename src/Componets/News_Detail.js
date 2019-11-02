import React, { Component } from 'react';
import dl from './Dulieu'
import NewsRelated from './NewsRelated';

class News_Detail extends Component {
    render() {
        // console.log(this.props.match.params.slug);
        // console.log(this.props.match.params.id);
        var dem = 1;

        
        return (
            <div>
                <div>
                    <header className="masthead tintuc">
                        <div className="container h-100">
                        <div className="row h-100">
                            <div className="col-lg-12 my-auto">
                            <div className="header-content mx-auto">
                                <h1 className="mb-1 text-center">Trang chi tiết tin tức</h1>
                            </div>
                            </div>
                        </div>
                        </div>
                    </header>
                    {/* chi tiet tin tuc */}
                {
                    dl.map((value, key) =>{
                        if(value.id === parseInt(this.props.match.params.id)){
                        return (
                            <div className="jumbotron jumbotron-fluid" key = {key}>
                                <div className="container">
                                    <img src={value.anh} className="img-fluid rong100" alt = "React router" />
                                    <h3 className="lead text-center mt-3">{value.tyieuDe}</h3>
                                    <hr className="my-2" />
                                    {value.noiDung}
                                </div>
                            </div>
                        )
                        }
                        return true;
                    })
                }
                 
                    <div className="container">
                        <h4 className="card-title text-center">Tin tức liên quan</h4>
                        <div className="row">
                        <div className="col-12">
                            <div className="card-deck">
                            {
                                dl.map((value, key) => {
                                    if(value.id !== parseInt(this.props.match.params.id)){
                                        if(dem <= 4){
                                            dem++;
                                            return (
                                                <NewsRelated
                                                    key = {key}
                                                    tinId = {value.id}
                                                    anh = {value.anh}
                                                    tieuDe = {value.tieuDe} 
                                                    noiDung = {value.noiDung}
                                                >
                                                </NewsRelated>
                                           )
                                        }
                                    }
                                    return true;
                                })
                            }
                                
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>

            </div>
        );
    }
}

export default News_Detail;