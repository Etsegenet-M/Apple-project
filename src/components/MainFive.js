import React from 'react'
import Watch from '../commonResource/images/icons/watch-series5-logo.png'
import Banker from '../commonResource/images/home/banker.png'
import Apple from "../commonResource/images/icons/apple-tv-logo.png";
function MainFive() {
  return (
      <div>
          <section class="fifth-heghlight-wrapper">
		<div class="container-fluid">
			<div class="row">
				<div class="left-side-wrapper col-sm-12 col-md-6">
					<div class="left-side-container">
						<div class="top-logo-wrapper">
							<div class="logo-wrapper">
                                      <img src={Apple}/>
							</div>
						</div>

						<div class="tvshow-logo-wraper">
                                  <img src={Banker}/>
						</div>

						<div class="watch-more-wrapper">
							<a href="#">Watch now on the Apple TV App</a>
						</div>
					</div>
                      </div>
                      <div class="right-side-wrapper col-sm-12 col-md-6">
					<div class="right-side-container">
						<div class="top-logo-wrapper">
							<div class="logo-wrapper">
                                      <img src={Watch}/>
							</div>
						</div>
						<div class="description-wraper">
							With the Always-On Retina display.<br/>
							You’ve never seen a watch like this.
						</div>
						<div class="links-wrapper">
							<ul>
								<li><a href="">Learn more</a></li>
								<li><a href="">Buy</a></li>
							</ul> 
						</div>
					</div>
				</div>					
			</div>
		</div> 
	</section>
    </div>
  )
}

export default MainFive;