 /**
 * Builds static test data
 * @return {object} All relevant data to do demo or test the site.
 */
export function siteTestData () {
  var displayList = [{image: 'http://lorempixel.com/400/200/fashion/1', header: 'David Byrne Addresses the Current Economic Crises Facing the Arts', snippet: 'David Byrne\'s What Good Are the Arts responds to the proposed Trump administration budget cuts and an address Byrne gave at his local City Hall. Read an excerpt of his article below:'},
       {image: 'http://lorempixel.com/400/200/people/1', header: 'A web archiving tool for regular users', snippet: 'Rhizome has launched a new user-friendly web archiving application, Webrecorder Player, and now wants to empower regular users to take ownership of the web archiving process, and to take better grasp of access.'},
       {image: 'http://lorempixel.com/400/200/nightlife/1', header: 'Brian Chippendale Discusses Living and Organizing Artist-DIY Spaces', snippet: 'Chippendale recalls his time spent with Fort Thunder, an independent DIY space in Providence, Rhode Island. Find an excerpt of the article below and read the entire essay at The Creative Independent.'}
  ]

  var displayList2 = [{image: 'https://dummyimage.com/400x200/735773/c5c6d1.jpg&text=Something+Graphical+Here', header: 'David Byrne Addresses the Current Economic Crises Facing the Arts', snippet: 'David Byrne\'s What Good Are the Arts responds to the proposed Trump administration budget cuts and an address Byrne gave at his local City Hall. Read an excerpt of his article below:'},
      {image: 'https://dummyimage.com/400x200/735773/c5c6d1.jpg&text=Something+Graphical+Here', header: 'Peter Piper picked a peck of Pickled Peppers', snippet: 'Doaifdjf dsaiofdjisoa fjdoispafjidop ijdospafjdiosafpsifdpsjfiaop ifopdagjifodagp fiodpagjf agijfop dagjifo dpsgjifodpsgjf dsopigjf dsiog fdiosg fosg '},
      {image: 'https://dummyimage.com/400x200/735773/c5c6d1.jpg&text=Something+Graphical+Here', header: 'The little engine that could but didn\'t', snippet: 'The itsy bitsy spider sadlfjd skla f;djk s;afj dksla;fjd sk;afj dkls; afjkdl ;safjkd l;safj dkl;sa fjkdl;s afjkdl ;safjkdl ;safjkdl;s afjkdl s;afj kdls; afjkdls;a fjkdl'}
  ]

  var displayList3 = [{image: 'http://lorempixel.com/400/200/fashion/3', header: 'No Lugar Que Tem Paranha, Jacaré nada de costa', snippet: 'David Byrne\'s What Good Are the Arts responds to the proposed Trump administration budget cuts and an address Byrne gave at his local City Hall. Read an excerpt of his article below:'},
      {image: 'http://lorempixel.com/400/200/people/3', header: 'Eeh eeehheeeeheeeeeheeeeheeh', snippet: 'dksjal;f djkslaf ;djklsa ;fjdks ;afjkdls; afjkdls; afjkdl;safjkld; agjkdl;saf jkdls;fdsf'},
      {image: 'http://lorempixel.com/400/200/nightlife/3', header: 'Brian Chippendale Discusses Living and Organizing Artist-DIY Spaces', snippet: 'jkl;dafjd sakl;f jdksla; fjkdsl a;fjkdlfhisu dghufios dghefiu sofghudijso gfhjdisl gfhjdkls gjfkdls gfhjkdls gfhjkdls gfjkdlsgjkfdlsjdkslvbfjkdls vfjkldsvfjkldsvjfkldnsjkldjkldsnjklvsd j dkflsa ;fjdkls; afjdksla;f jdksla;f jdksla;f djskal; fdjskla;f djskla;f ds'}
  ]

      // test data to be passed into the <main-view>component
  const data = {
    tableData: [{section: 'call for artists',
      latest: displayList,
      headerz: [{text: 'Title', sortable: false, value: 'title_value', left: true}, {text: 'Call Types', value: 'types'}, {text: 'Deadline', value: 'types'}, {text: 'Posted Date', value: 'types'}],
      items: [{title: 'Call for vendors for event @ Jackson Junge Gallery July 14th & 15th', spaceType: 'Expos, Fairs, Festivals', listingType: '05/09/2017', datePosted: '04/08/2017'}, {title: 'Call for Papers/Exhibitions: CICA New Media Art Conference 2017', spaceType: 'Conferences and Symposia', listingType: '04/26/2017', datePosted: '04/10/2017'}]},
    {section: 'jobs',
      latest: displayList2,
      headerz: [{text: 'Title', sortable: true, value: 'title_value'}, {text: 'Employment  Types(s)', value: 'types'}, {text: 'Job Types', value: 'types'}, {text: 'Posted Date', value: 'types'}],
      items: [{title: 'Art / Sports / Dance / Theater Counselors - Harand Theatre Camp', spaceType: 'other', listingType: 'Freelance/Contract/Temp', datePosted: '04/08/2017'}, {title: 'Dance, music school looking for a new owner', spaceType: 'Full time', listingType: 'Permanent', datePosted: '04/10/2017'}]},
    {section: 'spacefinder',
      latest: displayList3,
      headerz: [{text: 'Title', sortable: true, value: 'title_value'}, {text: 'Space Types(s)', value: 'types'}, {text: 'Neighborhood', value: 'types'}, {text: 'Listing Types', value: 'types'}, {text: 'Posted Date', value: 'types'}],
      items: [{title: 'Artist Penthouse Loft with Lake Sunrise View', spaceType: 'Artists Studio, Recording Studio, Writing/Office', neighborhood: 'Uptown', listingType: '90 Day', datePosted: '04/08/2017'}, {title: '1200 sq ft office condo for Sale', spaceType: 'Artists Studio, Ceramics Studio, Community TV Studio, Gallery/Exhibition Space, Performance/Screening Space, Photo Darkroom, Printmaking Facility, Recording Studio, Rehearsal Space, Writing/Office', neighborhood: 'Alki', listingType: 'Permanent', datePosted: '04/10/2017'}]}],
    search: '',
    description: 'Community Resource        committed to sustaining vibrant and accessible artistic communities',
    title: 'Seattle Artist Resource',
    icon: 'menu'
  }

  return data
}
