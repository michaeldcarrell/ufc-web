

let UIController = (function() {
    return {
        fighterStats: function() {
            return {
                BlueFightWin: ,
                loseSteakDiff: ,
                koDiff: ,
                submissionDiff: ,
                doctorStoppageWinDiff: ,
                winDiff: ,
                reachDiff: ,
                heightDiff: ,
                weightDiff: ,
                ageDiff: ,
                avgBodyAttDiff: ,
                avgBodyLandDiff: ,
                avgBodyLandPercDiff: ,
                avgClinchAttDiff: ,
                avgClinchLandDiff: ,
                avgClinchLandPercDiff: ,
                avgDistanceAttDiff: ,
                avgDistanceLandDiff: ,
                avgDistanceLandPercDiff: ,
                avgGroundAttDiff: ufc['B_avg_GROUND_att'] - ufc['R_avg_GROUND_att'],
                avgGroundLandDiff: ufc['B_avg_GROUND_landed'] - ufc['R_avg_GROUND_landed'],
                avgGroundLandPercDiff: (ufc['B_avg_GROUND_landed'] / ufc['B_avg_GROUND_att']) -
            (ufc['R_avg_GROUND_landed'] / ufc['R_avg_GROUND_att']),
                avgHeadAttDiff: ufc['B_avg_HEAD_att'] - ufc['R_avg_HEAD_att'],
                avgHeadLandDiff: ufc['B_avg_HEAD_landed'] - ufc['R_avg_HEAD_landed'],
                avgHeadLandPercDiff: (ufc['B_avg_HEAD_landed'] / ufc['B_avg_HEAD_att']) -
            (ufc['R_avg_HEAD_landed'] / ufc['R_avg_HEAD_att']),
                avgLegAttDiff: ufc['B_avg_LEG_att'] - ufc['R_avg_LEG_att'],
                avgLegLandDiff: ufc['B_avg_LEG_landed'] - ufc['R_avg_LEG_landed'],
                avgLegLandPercDiff: (ufc['B_avg_LEG_landed'] / ufc['B_avg_LEG_att']) -
            (ufc['R_avg_LEG_landed'] / ufc['R_avg_LEG_att']),
                avgKnockDownDiff: ufc['B_avg_KD'] - ufc['R_avg_KD'],
                avgPassDiff: ufc['B_avg_PASS'] - ufc['R_avg_PASS'],
                avgRevDiff: ufc['B_avg_REV'] - ufc['B_avg_REV']
            }
        },
        addNewRow: function(rowNumber) {
            return '    <div class="row" id="row-' + rowNumber + '">\n' +
                '        <div class="form-group col-3">\n' +
                '            <label for="hour_type_drop_down" class="form-text text-muted">Type</label>\n' +
                '            <select class="form-unit hour-type-input form-control" id="hour_type_drop_down">\n' +
                '                <option>Average Strikes</option>\n' +
                '                <option>Average Strikes Thrown</option>\n' +
                '            </select>\n' +
                '        </div>\n' +
                '\n' +
                '        <div class="form-group col-3">\n' +
                '            <label for="red-fighter-x" class="form-text text-muted">Red Fighter</label>\n' +
                '            <input type="number" class="form-unit form-control hours-gained-input" id="red-fighter-x">\n' +
                '        </div>\n' +
                '        <div class="form-group col-3">\n' +
                '            <label for="blue-fighter-x" class="form-text text-muted">Blue Fighter</label>\n' +
                '            <input type="number" class="form-unit form-control hours-gained-input" id="blue-fighter-x">\n' +
                '        </div>\n' +
                '    </div>'
        }
    }
})();

let controller = (function(UICtrl) {
    document.getElementById('submit-add-row').addEventListener('click', function(event) {
        console.log(UICtrl.addNewRow(1))
    })
})(UIController);
