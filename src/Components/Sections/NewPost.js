import React from 'react';
import '../../Css/Sections/NewPost.css';
import Photo from '../../Images/photo.svg';
import Video from '../../Images/video.svg';

const NewPost = ({interests,submitPost}) =>{
    const handleDropDown = () =>{
        document.querySelector('.custom-select').classList.toggle('open');
    }
    const customSelect = (e) =>{
        console.log(e.target.className)
        if(!e.target.classList.contains('selected')){
            if(e.target.parentNode.querySelector('.custom-option.selected')){
                e.target.parentNode.querySelector('.custom-option.selected').classList.remove('selected')
            }
            e.target.classList.add('selected');
            e.target.closest('.custom-select').querySelector('.custom-select__trigger span').textContent = e.target.textContent;
        }
    }
    return(
        <div className="newpost d-none d-lg-block">
            <form onSubmit={submitPost}>
                <textarea name="" id="" cols="30" rows="10" className="postinput" placeholder="What's Going on?"></textarea>
                <div className="row">
                    <div className="postextras col-sm-4">
                        <img src={Photo} alt="" className="postextraimages"/>
                        <img src={Video} alt="" className="postextraimages"/>
                    </div>
                    <div className="postinterests col-sm-4" onClick={handleDropDown}>
                        <div class="custom-select">
                            <div class="custom-select__trigger"><span>Choose a post category</span>
                                <div class="arrow"></div>
                            </div>
                            <div class="custom-options">
                                {interests.map((interest)=>{
                                    return(
                                        <span class="custom-option" data-value={interest} onClick={customSelect}>{interest}</span>
                                    )
                                })}
                                
                            </div>
                        </div>
                    </div>
                    <div class="buttoncontainer col-sm-4">
                        <button type="submit" className="postbutton">POST</button>
                    </div>
                </div>
            </form>
           
        </div>
    )
}

export default NewPost