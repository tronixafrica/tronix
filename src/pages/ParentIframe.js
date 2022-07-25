const ParentIframe = () => {
    return ( 
        <>
            <div>parent iframe</div>
            <iframe 
            src="http://192.168.4.1/" 
            width='1000'
            height='1000'
            frameborder="0"></iframe>
        </>
    );
}
 
export default ParentIframe;