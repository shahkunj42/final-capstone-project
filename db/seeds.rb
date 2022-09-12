puts 'seeding... '
require 'faker'

a1 = Admin.create(username: 'admin', 
    password: 'IdkTbh42@',
    password_confirmation: 'IdkTbh42@',
    email: 'shaili.shah27@gmail.com'
)

c1 = Customer.create(
    username: 'koolkid073094',
    email: 'patelaj94@gmail.com',
    name: 'Arjun Patel',
    password: 'Passw0rd!',
    password_confirmation: 'Passw0rd!'

)
c2 = Customer.create(
    username: 'kingshady42',
    email: 'shahkunj42@gmail.com',
    name: 'Kunj Shah',
    password: 'DErep19702!',
    password_confirmation: 'DErep19702!'

)
c3 = Customer.create(
    username: 'kchokshi',
    email: 'kalgi@gmail.com',
    name: 'Kalgi Chokshi',
    password: 'Iluvbuzz<3',
    password_confirmation: 'Iluvbuzz<3'

)

i1 = Inqury.create(
    username: 'kchokshi', 
    email: 'kalgi@gmail.com',
    name: 'Kalgi Chokshi',
    description: 'Looking for a poster for our sangeet',
    service: 'Sangeet Poster'
)

i2 = Inqury.create(
    username: 'kingshady42', 
    email: 'shahkunj42@gmail.com',
    name: 'Kunj Shah',
    description: 'Want some cards for christmas to send to my family',
    service: 'Card and Envelope Bundle'
)

i3 = Inqury.create(
    username: 'koolkid073094', 
    email: 'patelaj94@gmail.com',
    name: 'Arjun Patel',
    description: 'Want a Poster for my wedding and custom cards to invite guests',
    service: 'Wedding poster, Custom Caligraphy'
)

b1 = Blog.create(
    title: 'When in Rome',
    content: 'To shewing another demands to. Marianne property cheerful informed at striking at. Clothes parlors however by cottage on. In views it or meant drift to. Be concern parlors settled or do shyness address. Remainder northward performed out for moonlight. Yet late add name was rent park from rich. He always do do former he highly. Paid was hill sir high. For him precaution any advantages dissimilar comparison few terminated projecting. Prevailed discovery immediate objection of ye at. Repair summer one winter living feebly pretty his. In so sense am known these since. Shortly respect ask cousins brought add tedious nay. Expect relied do we genius is. On as around spirit of hearts genius. Is raptures daughter branched laughter peculiar in settling. To they four in love. Settling you has separate supplied bed. Concluded resembled suspected his resources curiosity joy. Led all cottage met enabled attempt through talking delight. Dare he feet my tell busy. Considered imprudence of he friendship boisterous. Dashwood contempt on mr unlocked resolved provided of of. Stanhill wondered it it welcomed oh. Hundred no prudent he however smiling at an offence. If earnestly extremity he he propriety something admitting convinced ye. Pleasant in to although as if differed horrible. Mirth his quick its set front enjoy hoped had there. Who connection imprudence middletons too but increasing celebrated principles joy. Herself too improve gay winding ask expense are compact. New all paid few hard pure she.',
    header_image: 'https://cdn.mos.cms.futurecdn.net/BiNbcY5fXy9Lra47jqHKGK.jpg',
    admin_id: a1
)

b2 = Blog.create(
    title: 'Thailand Unexpected Beauty',
    content: 'Both rest of know draw fond post as. It agreement defective to excellent. Feebly do engage of narrow. Extensive repulsive belonging depending if promotion be zealously as. Preference inquietude ask now are dispatched led appearance. Small meant in so doubt hopes. Me smallness is existence attending he enjoyment favourite affection. Delivered is to ye belonging enjoyment preferred. Astonished and acceptance men two discretion. Law education recommend did objection how old.Be at miss or each good play home they. It leave taste mr in it fancy. She son lose does fond bred gave lady get. Sir her company conduct expense bed any. Sister depend change off piqued one. Contented continued any happiness instantly objection yet her allowance. Use correct day new brought tedious. By come this been in. Kept easy or sons my it done.Consulted perpetual of pronounce me delivered. Too months nay end change relied who beauty wishes matter. Shew of john real park so rest we on. Ignorant dwelling occasion ham for thoughts overcame off her consider. Polite it elinor is depend. His not get talked effect worthy barton. Household shameless incommode at no objection behaviour. Especially do at he possession insensible sympathize boisterous it. Songs he on an widen me event truth. Certain law age brother sending amongst why covered.', 
    header_image: 'https://www.jetsetter.com//uploads/sites/7/2019/10/vH0BLDMG.jpg', 
    admin_id: a1 
)
b3 = Blog.create(
    title: 'Goodbye Delaware! Setting of For a new City',
    content: 'Or neglected agreeable of discovery concluded oh it sportsman. Week to time in john. Son elegance use weddings separate. Ask too matter formed county wicket oppose talent. He immediate sometimes or to dependent in. Everything few frequently discretion surrounded did simplicity decisively. Less he year do with no sure loud. Must you with him from him her were more. In eldest be it result should remark vanity square. Unpleasant especially assistance sufficient he comparison so inquietude. Branch one shy edward stairs turned has law wonder horses. Devonshire invitation discovered out indulgence the excellence preference. Objection estimable discourse procuring he he remaining on distrusts. Simplicity affronting inquietude for now sympathize age. She meant new their sex could defer child. An lose at quit to life do dull. Betrayed cheerful declared end and. Questions we additions is extremely incommode. Next half add call them eat face. Age lived smile six defer bed their few. Had admitting concluded too behaviour him she. Of death to or to being other.',
    header_image: 'https://www.travelandleisure.com/thmb/hAATex0MmGutTeWfLDHDO4dnOPg=/1800x1200/filters:fill(auto,1)/boston-massachusetts-BOSTONTG0221-719aef2eeb1c4929b6c839715e34a69e.jpg', 
    admin_id: a1
)



puts 'succSEEDed!'