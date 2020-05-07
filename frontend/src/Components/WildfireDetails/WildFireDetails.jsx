import React, { useState, useEffect, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import "./WildFireDetails.scss";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

let WildFireDetails = (props) => {

    return (
        <Fragment>
            <div class="bg-light fire-bg">
                <div class="container py-5">
                    <div class="row h-100 align-items-center py-5">
                        <div class="col-lg-6">
                            <h1 class="display-4">Wildfires:</h1>
                            <p class="lead mb-0">An uncontrolled fire in an area of combustible vegetation occurring in rural areas.</p>
                        </div>
                        <div class="col-lg-6 d-none d-lg-block img-none"><img src="https://res.cloudinary.com/mhmd/image/upload/v1556834136/illus_kftyh4.png" alt="" class="img-fluid" /></div>
                    </div>
                </div>
            </div>

            <div class="bg-white py-5">
                <div class="container py-5">
                    <h2 className="display-4">Stats: Largest wildfires of the last decade</h2>
                    <div class="row align-items-center mb-5 table-responsive">
                        <table class="wikitable sortable jquery-tablesorter table">

                            <thead><tr>
                                <th rowspan="2" class="headerSort" tabindex="0" role="columnheader button" title="Sort ascending">Name
</th>
                                <th rowspan="2" class="headerSort" tabindex="0" role="columnheader button" title="Sort ascending">Region
</th>
                                <th colspan="2">Area burned <small>(approx.)</small>
                                </th>
                                <th rowspan="2!data-sort-type=&quot;date&quot;" class="headerSort" tabindex="0" role="columnheader button" title="Sort ascending">Date
</th>
                                <th rowspan="2" class="headerSort" tabindex="0" role="columnheader button" title="Sort ascending">Fatalities
</th>
                                <th rowspan="2!" class="unsortable">Buildings destroyed
</th>
                                <th rowspan="2!" class="unsortable">Notes
</th></tr><tr>
                                    <th data-sort-type="number" class="headerSort" tabindex="0" role="columnheader button" title="Sort ascending">hectar
</th>
                                    <th data-sort-type="number" class="headerSort acres" tabindex="0" role="columnheader button" title="Sort ascending acres">acres
</th></tr></thead><tbody>

                                <tr>
                                    <td><div href="/wiki/2019%E2%80%9320_Australian_bushfire_season" title="2019–20 Australian bushfire season">2019–20 Australian bushfire season</div>
                                    </td>
                                    <td><div href="/wiki/East_Australia" class="mw-redirect" title="East Australia">South-east Australia</div>
                                    </td>
                                    <td>6,300,000
</td>
                                    <td>16,000,000
</td>
                                    <td data-sort-value="2019-09-05">5 September 2019 – present
</td>
                                    <td>25
</td>
                                    <td>2,500+
</td>
                                    <td>
                                    </td></tr>
                                <tr>
                                    <td><div href="/wiki/2019_Canary_Islands_wildfires" title="2019 Canary Islands wildfires">2019 Canary Islands wildfires</div>
                                    </td>
                                    <td><div href="/wiki/Gran_Canaria" title="Gran Canaria">Gran Canaria</div>, <div href="/wiki/Tenerife" title="Tenerife">Tenerife</div> and <div href="/wiki/Lanzarote" title="Lanzarote">Lanzarote</div>
                                    </td>
                                    <td>10,000
</td>
                                    <td>25,000
</td>
                                    <td data-sort-value="2019-08-10">10 August 2019 – 25 August 2019
</td>
                                    <td>
                                    </td>
                                    <td>
                                    </td>
                                    <td>
                                    </td></tr>
                                <tr>
                                    <td><div href="/wiki/2019_Siberia_wildfires" title="2019 Siberia wildfires">2019 Siberia wildfires</div>
                                    </td>
                                    <td><div href="/wiki/Siberia" title="Siberia">Siberia</div>
                                    </td>
                                    <td>3,000,000
</td>
                                    <td>7,400,000
</td>
                                    <td data-sort-value="2019-07-01">July 2019 – September 2019
</td>
                                    <td>2
</td>
                                    <td>
                                    </td>
                                    <td>
                                    </td></tr>
                                <tr>
                                    <td><div href="/wiki/2019_Alberta_wildfires" title="2019 Alberta wildfires">2019 Alberta wildfires</div>
                                    </td>
                                    <td><div href="/wiki/Northern_Alberta" title="Northern Alberta">Northern</div> and <div href="/wiki/Central_Alberta" title="Central Alberta">Central Alberta</div>, <div href="/wiki/Canada" title="Canada">Canada</div>
                                    </td>
                                    <td>883,414
</td>
                                    <td>2,182,960
</td>
                                    <td data-sort-value="2019-03-01">1 March 2019 – 23 December 2019
</td>
                                    <td>0
</td>
                                    <td>16
</td>
                                    <td>
                                    </td></tr>
                                <tr>
                                    <td><div href="/wiki/2019_Amazon_rainforest_wildfires" title="2019 Amazon rainforest wildfires">2019 Amazon rainforest wildfires</div>
                                    </td>
                                    <td><div href="/wiki/Brazil" title="Brazil">Brazil</div>, <div href="/wiki/Bolivia" title="Bolivia">Bolivia</div>, <div href="/wiki/Paraguay" title="Paraguay">Paraguay</div> and <div href="/wiki/Peru" title="Peru">Peru</div>
                                    </td>
                                    <td>906,000
</td>
                                    <td>2,240,000
</td>
                                    <td data-sort-value="2019-01-01">January 2019 – ongoing
</td>
                                    <td>2
</td>
                                    <td>
                                    </td>
                                    <td>
                                    </td></tr>
                                <tr>
                                    <td><div href="/wiki/Camp_Fire_(2018)" title="Camp Fire (2018)">2018 Camp Fire</div>
                                    </td>
                                    <td><div href="/wiki/Northern_California" title="Northern California">Northern California</div>
                                    </td>
                                    <td>62,053
</td>
                                    <td>153,340
</td>
                                    <td data-sort-value="2018-11-08">8 November  2018 – 25 November 2018
</td>
                                    <td>85
</td>
                                    <td>18,804
</td>
                                    <td>
                                    </td></tr>
                                <tr>
                                    <td><div href="/wiki/2018_British_Columbia_wildfires" title="2018 British Columbia wildfires">2018 British Columbia wildfires</div>
                                    </td>
                                    <td><div href="/wiki/British_Columbia" title="British Columbia">British Columbia</div>, <div href="/wiki/Canada" title="Canada">Canada</div>
                                    </td>
                                    <td>1,351,314
</td>
                                    <td>3,339,170
</td>
                                    <td data-sort-value="2018-08-15">15 August 2018 – 7 September 2018
</td>
                                    <td>0
</td>
                                    <td>50
</td>
                                    <td>
                                    </td></tr>
                                <tr>
                                    <td><div href="/wiki/Mendocino_Complex_Fire" title="Mendocino Complex Fire">2018 Mendocino Complex Fire</div>
                                    </td>
                                    <td><div href="/wiki/Northern_California" title="Northern California">Northern California</div>
                                    </td>
                                    <td>185,800
</td>
                                    <td>459,000
</td>
                                    <td data-sort-value="2018-07-27">27 July 2018 – 7 November 2018
</td>
                                    <td>1
</td>
                                    <td>280
</td>
                                    <td>
                                    </td></tr>
                                <tr>
                                    <td><div href="/wiki/2018_Attica_wildfires" title="2018 Attica wildfires">2018 Attica wildfires</div>
                                    </td>
                                    <td><div href="/wiki/Attica" title="Attica">Attica</div>, <div href="/wiki/Greece" title="Greece">Greece</div>
                                    </td>
                                    <td>unknown
</td>
                                    <td>unknown
</td>
                                    <td data-sort-value="2018-07-23">23 July 2018 – 26 July 2018
</td>
                                    <td>102
</td>
                                    <td>
                                    </td>
                                    <td><div href="/wiki/2018_European_heat_wave" title="2018 European heat wave">2018 European heat wave</div>
                                    </td></tr>
                                <tr>
                                    <td><div href="/wiki/2018_Sweden_wildfires" title="2018 Sweden wildfires">2018 Sweden wildfires</div>
                                    </td>
                                    <td><div href="/wiki/Sweden" title="Sweden">Sweden</div>
                                    </td>
                                    <td>25,000
</td>
                                    <td>62,000
</td>
                                    <td data-sort-value="2018-05-23">May – August 2018
</td>
                                    <td>0
</td>
                                    <td>unknown
</td>
                                    <td><div href="/wiki/2018_European_heat_wave" title="2018 European heat wave">2018 European heat wave</div>
                                    </td></tr>
                                <tr>
                                    <td><div href="/wiki/2018_Russian_wildfires" title="2018 Russian wildfires">2018 Russian wildfires</div>
                                    </td>
                                    <td><div href="/wiki/Amur_Oblast" title="Amur Oblast">Amur Oblast</div>, <div href="/wiki/Russia" title="Russia">Russia</div>
                                    </td>
                                    <td>321,255
</td>
                                    <td>793,840
</td>
                                    <td data-sort-value="2018-05">May 2018 – July 2018
</td>
                                    <td>unknown
</td>
                                    <td>unknown
</td>
                                    <td>
                                    </td></tr>
                                <tr>
                                    <td><div href="/wiki/2018_California_wildfires" title="2018 California wildfires">2018 California wildfires</div>
                                    </td>
                                    <td><div href="/wiki/California" title="California">California</div>
                                    </td>
                                    <td>766,439
</td>
                                    <td>1,893,910
</td>
                                    <td data-sort-value="2018-02-18">18 February 2018 – 7 December 2018
</td>
                                    <td>103
</td>
                                    <td>22,751
</td>
                                    <td>
                                    </td></tr>
                                <tr>
                                    <td><div href="/wiki/Thomas_Fire" title="Thomas Fire">2017–18 Thomas Fire</div>
                                    </td>
                                    <td><div href="/wiki/Southern_California" title="Southern California">Southern California</div>
                                    </td>
                                    <td>114,078
</td>
                                    <td>281,890
</td>
                                    <td data-sort-value="2017-12-04">4 December 2017 – 12 January 2018
</td>
                                    <td>2
</td>
                                    <td>1,063
</td>
                                    <td>
                                    </td></tr>
                                <tr>
                                    <td><div href="/wiki/2017_British_Columbia_wildfires" title="2017 British Columbia wildfires">2017 British Columbia wildfires</div>
                                    </td>
                                    <td><div href="/wiki/British_Columbia" title="British Columbia">British Columbia</div>, <div href="/wiki/Canada" title="Canada">Canada</div>
                                    </td>
                                    <td>1,216,053
</td>
                                    <td>3,004,930
</td>
                                    <td data-sort-value="2017-07-07">7 July  2017 – 15 September 2017
</td>
                                    <td>0
</td>
                                    <td>305
</td>
                                    <td>
                                    </td></tr>
                                <tr>
                                    <td><div href="/wiki/June_2017_Portugal_wildfires" title="June 2017 Portugal wildfires">June 2017 Portugal wildfires</div>
                                    </td>
                                    <td><div href="/wiki/Portugal" title="Portugal">Portugal</div>
                                    </td>
                                    <td>44,969
</td>
                                    <td>111,120
</td>
                                    <td data-sort-value="2017-06-17">17–24 June 2017
</td>
                                    <td>66
</td>
                                    <td>
                                    </td>
                                    <td>
                                    </td></tr>
                                <tr>
                                    <td><div href="/wiki/2016_Fort_McMurray_wildfire" title="2016 Fort McMurray wildfire">2016 Fort McMurray wildfire</div>
                                    </td>
                                    <td><div href="/wiki/Alberta" title="Alberta">Alberta</div>, <div href="/wiki/Canada" title="Canada">Canada</div>
                                    </td>
                                    <td>589,552
</td>
                                    <td>1,456,810
</td>
                                    <td data-sort-value="2016-05-01">1 May 2016 – 2 August 2017
</td>
                                    <td>0
</td>
                                    <td>
                                    </td>
                                    <td>
                                    </td></tr>
                                <tr>
                                    <td><div href="/wiki/2015_Russian_wildfires" title="2015 Russian wildfires">2015 Russian wildfires</div>
                                    </td>
                                    <td><div href="/wiki/Russia" title="Russia">Russia</div>, <div href="/wiki/Inner_Mongolia" title="Inner Mongolia">Inner Mongolia</div>, <div href="/wiki/China" title="China">China</div>
                                    </td>
                                    <td>1,100,000
</td>
                                    <td>2,700,000
</td>
                                    <td data-sort-value="2015-04-12">mid April 2015
</td>
                                    <td>33
</td>
                                    <td>1440+
</td>
                                    <td>
                                    </td></tr>
                                <tr>
                                    <td><div href="/wiki/2014_Northwest_Territories_fires" title="2014 Northwest Territories fires">2014 Northwest Territories fires</div>
                                    </td>
                                    <td><div href="/wiki/Northwest_Territories" title="Northwest Territories">Northwest Territories</div>, Canada
</td>
                                    <td>3,500,000
</td>
                                    <td>8,600,000
</td>
                                    <td data-sort-value="2014-07-01">Summer 2014
</td>
                                    <td>unknown
</td>
                                    <td>unknown
</td>
                                    <td>
                                    </td></tr>
                                <tr>
                                    <td><div href="/wiki/Rim_Fire" title="Rim Fire">2013 Rim Fire</div>
                                    </td>
                                    <td><div href="/wiki/Sierra_Nevada_(U.S.)" class="mw-redirect" title="Sierra Nevada (U.S.)">Sierra Nevada</div>, <div href="/wiki/California" title="California">California</div>
                                    </td>
                                    <td>104,100
</td>
                                    <td>257,000
</td>
                                    <td data-sort-value="2013-08-17">17 August 2013 – 4 November 2014
</td>
                                    <td>0
</td>
                                    <td>112
</td>
                                    <td>
                                    </td></tr>
                                <tr>
                                    <td><div href="/wiki/Richardson_Fire" title="Richardson Fire">2011 Richardson Backcountry Fire</div>
                                    </td>
                                    <td><div href="/wiki/Alberta" title="Alberta">Alberta</div>, <div href="/wiki/Canada" title="Canada">Canada</div>
                                    </td>
                                    <td>705,075
</td>
                                    <td>1,742,280
</td>
                                    <td data-sort-value="2011-05-15">15 May 2011 – September 2011
</td>
                                    <td>0
</td>
                                    <td>
                                    </td>
                                    <td>
                                    </td></tr>
                                <tr>
                                    <td><div href="/wiki/2010_Bolivia_forest_fires" title="2010 Bolivia forest fires">2010 Bolivia forest fires</div>
                                    </td>
                                    <td><div href="/wiki/Bolivia" title="Bolivia">Bolivia</div>
                                    </td>
                                    <td>1,500,000
</td>
                                    <td>3,700,000
</td>
                                    <td data-sort-value="2010-08-15">15 August 2010 – present
</td>
                                    <td>0
</td>
                                    <td>
                                    </td>
                                    <td>
                                    </td></tr>
                                <tr>
                                    <td><div href="/wiki/2010_Russian_wildfires" title="2010 Russian wildfires">2010 Russian wildfires</div>
                                    </td>
                                    <td>Russia
</td>
                                    <td>300,000
</td>
                                    <td>740,000
</td>
                                    <td data-sort-value="2010-07">late July 2010 – early September 2010
</td>
                                    <td>54
</td>
                                    <td>2,000
</td>
                                    <td>
                                    </td></tr></tbody><tfoot></tfoot></table>
                    </div>
                    <div class="row align-items-center">
                        <div class="col-lg-5 px-5 mx-auto"><img src="https://image.freepik.com/free-vector/man-programmer-is-working-with-laptop-code-programmer-coding_88272-1380.jpg" alt="" class="img-fluid mb-4 mb-lg-0" /></div>
                        <div class="col-lg-6"><i class="fa fa-leaf fa-2x mb-3 text-primary"></i>
                            <h2 class="font-weight-light">Who are we?</h2>
                            <p class="font-italic text-muted mb-4">Just a group of individuals trying to help the community by doing whatever we do best!</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="bg-light py-5">
                <div class="container py-5">
                    <div class="row mb-4">
                        <div class="col-lg-8">
                            <h2 class="display-4 font-weight-light">Our team</h2>
                            <p class="font-italic text-muted">Thanks to everyone responsible in making this project a success!</p>
                        </div>
                    </div>

                    <div class="row text-center">
                        <div class="col-xl-3 col-sm-6 mb-5">
                            <div class="bg-white rounded shadow-sm py-5 px-4"><img src="https://res.cloudinary.com/mhmd/image/upload/v1556834130/avatar-3_hzlize.png" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                                <h5 class="mb-0">Srinivas Anudeep Chitta</h5><span class="small text-uppercase text-muted">Software Developer</span>
                            </div>
                        </div>
                        <div class="col-xl-3 col-sm-6 mb-5">
                            <div class="bg-white rounded shadow-sm py-5 px-4"><img src="https://res.cloudinary.com/mhmd/image/upload/v1556834133/avatar-2_f8dowd.png" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                                <h5 class="mb-0">Priyam Vaidya</h5><span class="small text-uppercase text-muted">Software Engineer</span>
                            </div>
                        </div>
                        <div class="col-xl-3 col-sm-6 mb-5">
                            <div class="bg-white rounded shadow-sm py-5 px-4"><img src="https://res.cloudinary.com/mhmd/image/upload/v1556834133/avatar-1_s02nlg.png" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                                <h5 class="mb-0">Chaitanya Naik</h5><span class="small text-uppercase text-muted">Software Engineer</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </Fragment>
    );

}
export default WildFireDetails;