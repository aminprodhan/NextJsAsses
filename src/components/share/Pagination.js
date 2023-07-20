import { Button, IconButton } from "@material-tailwind/react";
import { useState } from "react";

const Pagination=({totalPage,handlePageClick})=>{
    const [active, setActive] = useState(1);
    const getItemProps = (index) =>
        ({
            variant: active === index ? "filled" : "text",
            color: active === index ? "blue" : "blue-gray",
            onClick: () => setActive(index),
        });
    const next = () => {
        if (active === totalPage) return;
        setActive(active + 1);
    };
    const prev = () => {
        if (active === 1) return;
        setActive(active - 1);
    };
    const pageClick=(page)=>{
        getItemProps(page);
        handlePageClick(page);
    }
    const pageContent=[ ...Array(totalPage).keys() ].map(page => <IconButton 
    onClick={()=>pageClick(page)} key={page} >{page+1}</IconButton>);
    return(
        <div className="flex items-center gap-4">
            <Button
                variant="text"
                color="blue-gray"
                className="flex items-center gap-2"
                onClick={prev}
                disabled={active === 1}>
                Previous
            </Button>
            <div className="flex items-center gap-2">
                {
                   pageContent
                }
            </div>
            <Button
                variant="text"
                color="blue-gray"
                className="flex items-center gap-2"
                onClick={next}
                disabled={active === totalPage}>
                Next
            </Button>
        </div>
    )
}
export default Pagination;