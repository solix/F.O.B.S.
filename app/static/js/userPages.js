function createDptClicked() {
    hideInitialContent(showCreateDepartmentContent);
}
function hideInitialContent(callback) {
    $('.content-initial').fadeOut(callback);
}
function showCreateDepartmentContent(callback) {
    $('.content-create-department').fadeIn(callback);
}

function setTotalRevenueClicked() {
    hideInitialContent(showSetTotalRevenue);
}

function showSetTotalRevenue(callback) {
    $('.content-set-total-revenue').fadeIn(callback);
}

function reviewFDRequestsClicked() {
    hideInitialContent(showReviewFDRequest);
}

function showReviewFDRequest(callback) {
    $('.content-review-financial-request').fadeIn(callback);
}

function ViewAllDepartmentHistoryClicked() {
    hideInitialContent(showViewAllDeptHistory);
}

function showViewAllDeptHistory(callback) {
    $('.content-view-department-history').fadeIn(callback);
}


// Functions for the employee page
function requestFundsClicked() {
    console.log('wacha');
    hideInitialContent(showRequestFunds);
}

function showRequestFunds(callback) {
    $('.content-request-funds').fadeIn(callback);
}