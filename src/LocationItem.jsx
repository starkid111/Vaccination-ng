

const LocationItem = (props) => {
    return ( 
        <div className="flex md:justify-between items-center gap-2">
             <img src={props.image} alt="" />
             <div>
                <p className="text-white/50">{props.name}</p>
                <p className="text-white font-bold">{props.description}</p>
            </div> 
        </div>
     );
}
 
export default LocationItem;