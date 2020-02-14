import React from 'react';
function Alert ({type,children})
    {
        return(
            <div className={`alert alert-${type} alert-dismissible fade show` }role="alert">
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            <span class="sr-only">Close</span>
            </button>
            {children}
            </div>
        )
}
export default Alert;