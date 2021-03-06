// ==UserScript==
// @name        WME URComments-Enhanced
// @namespace   daniel@dbsooner.com
// @version     2018.12.04.01
// @description This script is for replying to user requests the goal is to speed up and simplify the process. It is a fork of rickzabel's original script.
// @grant       none
// @include     /^https:\/\/(www|beta)\.waze\.com\/(?!user\/)(.{2,6}\/)?editor\/?.*$/
// @require     https://greasyfork.org/scripts/24851-wazewrap/code/WazeWrap.js
// @author      dBsooner
// @license     MIT/BSD/X11
// @icon        data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAwCAYAAACFUvPfAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjQyQjZDNjdEODYzODExRTRBRDY0Q0I2QjA1MjU4N0EyIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjQyQjZDNjdFODYzODExRTRBRDY0Q0I2QjA1MjU4N0EyIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NDJCNkM2N0I4NjM4MTFFNEFENjRDQjZCMDUyNTg3QTIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NDJCNkM2N0M4NjM4MTFFNEFENjRDQjZCMDUyNTg3QTIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6++Bk8AAANOElEQVR42tRZ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
// @contributionURL https://github.com/WazeDev/Thank-The-Authors
// ==/UserScript==

/* global GM_info */
/* global W */
/* global I18n */
/* global $ */
/* global WazeWrap */

(function() {
    'use strict';

    const SCRIPT_AUTHOR = GM_info.script.author;
    const SETTINGS_STORE_NAME = "WME_URC-E";
    const ALERT_UPDATE = true;
    const SCRIPT_VERSION = GM_info.script.version;
    const SCRIPT_VERSION_CHANGES = [
        GM_info.script.name + '\nv' + SCRIPT_VERSION + '\n\nWhat\'s New\n------------------------------\n',
        '- Initial release of URComments-Enhanced.'
        ].join('');
    const doublClickIcon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGnRFWHRTb2Z0d2FyZQBQYWludC5ORVQgdjMuNS4xMDD0cqEAAAMnSURBVFhH7ZdNSFRRGIZH509ndGb8nZuCCSNE4CyGURmkTVCuBEmEiMSZBmaoRYsIgiDMhVFEFERBZITbEINQbFMtclGQtUgIalG0ioiMFkWlZc+53WN3rmfG64wSgS+8fOd8c8533u/83HPGsRZcLtedqqqqU0Z189De3q4ZxRyUlZVN+3y+EaNaENXV1VecTue8HZLYPO0v6B1jsZiG42soFErpDhPsCshkMgHM8npI7F/YP6ivr0+Wl5f/CAQCOSLsCkgmkyGMHtjtds8Q66Ig2Y5Jfx7+RV1dnS6CNT9kuBzUp5iZI0Y1L8wCEHzW4/Hs9Xq9MRJqEb7KysrHiPmM/w18JdvCXNTW1g4JEQTRRbS1tYkAOejt7Q12dnZqXV1d4VQq5RE+swAG+sKSfmImbkkB7LEo5QeNjY3DrP0x2RauBhkPof7ZwMCAHlygubm5o6KiYpyg76jKzsuIXULshFkA/Q9idUgBgmS+h/aXZN2gGul02i1sIpEgvm/M2DArHRlkP/5JUUbUE6uAmpqaEyTxgUE/Ch8JxPDfa2hoOM1yHJdtxTmfQpXYNDqZvplIJLKdHx3xeNxHgIcrjU0ks13slZuirBLQ2tq6MxwO72NfZYWPuPeJv4B9iX0u2zoIcpJMhiXpfJgfdPj9/huYnIElCwkg8ymEnzd4TfrzUI2mpqYO67SbaREwl81mi/kOCKsG6zSOWdVJ0iyAZVzo7u72MWPXqb+wS07DZawa1t1upVmAIIIno9HoNsqlo7+/f83ptAoQFFPKJluURNQE/vWDoxfG5AxopUqAgtNw/ZAC+PAMs74ZFfliapsugON0hqk8mo8csaeiXQGWJmADuCVgS8B/KoDv+r8V0NfX5zduqpLId0I8WIoDl9FbjDKwXXIXjGKLA52vYpSB7ZIHaAJbHDRN28HTaZGiMvha5B55NDs7S7EEcNmcwygHKESEfyeBOOXSMDg46OKVc5uiciAVxaxxUx6gvDFAhJOn0wiBv1FVDirJxn3Ns3s35Y0Hz+wWZmOUozXHe0D8xfrJgEvwPdf23WAwmO7p6fEazW3C4fgNPVAixOZacokAAAAASUVORK5CYII=';
    const DEBUG = true;
    let _settings = {};
    let _commentList = [];
    let _defaultComments = {
        'dr': { 'commentNum':null, 'urNum':98 }, // Default reminder
        'dc': { 'commentNum':null, 'urNum':99 }, // Default closed / not identified
        'it': { 'commentNum':null, 'urNum':6 }, // Incorrect turn
        'ia': { 'commentNum':null, 'urNum':7 }, // Incorrect address
        'ir': { 'commentNum':null, 'urNum':8 }, // Incorrect route
        'mra': { 'commentNum':null, 'urNum':9 }, // Missing roundabout
        'ge': { 'commentNum':null, 'urNum':10 }, // General error
        'tna': { 'commentNum':null, 'urNum':11 }, // Turn not allowed
        'ij': { 'commentNum':null, 'urNum':12 }, // Incorrect junction
        'mbo': { 'commentNum':null, 'urNum':13 }, // Missing bridge overpass
        'wdd': { 'commentNum':null, 'urNum':14 }, // Wrong driving direction
        'me': { 'commentNum':null, 'urNum':15 }, // Missing exit
        'mr': { 'commentNum':null, 'urNum':16 }, // Missing road
        'ml': { 'commentNum':null, 'urNum':18 }, // Missing landmark
        'br': { 'commentNum':null, 'urNum':19 }, // Blocked road
        'msn': { 'commentNum':null, 'urNum':21 }, // Missing street name
        'isps': { 'commentNum':null, 'urNum':22 }, // Incorrect street prefix or suffix
        'sl': { 'commentNum':null, 'urNum':23 } // Speed Limit
    };
    let _urceInitialized = false;
    let _mapUpdateRequestObserver = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            let urId = $(".update-requests .selected").data("id");
            if ($(mutation.target).is('#panel-container') & mutation.addedNodes.length > 0 && urId > 0) {
                handleUpdateRequestContainer(urId);
            }
        });
    });
    _mapUpdateRequestObserver.isObserving = false;

    const _CommentLists = [{idx:0, name:'CommentTeam', oldVarName: 'CommentTeam', listOwner: 'CommentTeam', gSheetUrl: 'https://spreadsheets.google.com/feeds/list/1aVKBOwjYmO88x96fIHtIQgAwMaCV_NfklvPqf0J0pzQ/oz10sdb/public/values?alt=json' },
                           {idx:1, name:'Custom', oldVarName:'Custom', listOwner: 'Custom', gSheetUrl: '' },
                           {idx:2, name:'USA - SCR', oldVarName: 'USA_SouthCentral', listOwner: 'SCR CommentTeam', gSheetUrl: 'https://spreadsheets.google.com/feeds/list/1aVKBOwjYmO88x96fIHtIQgAwMaCV_NfklvPqf0J0pzQ/ope05au/public/values?alt=json' },
                           {idx:3, name:'USA - SER', oldVarName: 'USA_Southeast', gSheetUrl: 'https://spreadsheets.google.com/feeds/list/1aVKBOwjYmO88x96fIHtIQgAwMaCV_NfklvPqf0J0pzQ/o35ezyr/public/values?alt=json' }
                          ].sort(dynamicSort('name'));

    function log(message) { console.log('URC-E:', message); }
    function logError(message) { console.error('URC-E:', message); }
    function logDebug(message) { if (DEBUG) console.debug('URC-E:', message); }
    function logWarning(message) { console.warn('URC-E:', message); }

    function dynamicSort(property) {
        let sortOrder = 1;
        if(property[0] === "-") {
            sortOrder = -1;
            property = property.substr(1);
        }
        return function (a,b) {
            if (sortOrder == -1) {
                return b[property].localeCompare(a[property]);
            } else {
                return a[property].localeCompare(b[property]);
            }
        }
    }

    function encodeHtml(text) {
        let tempDiv = document.createElement("div");
        tempDiv.innerText = tempDiv.textContent = text;
        text = tempDiv.innerHTML;
        return text;
    }

    function loadSettingsFromStorage() {
        let loadedSettings = $.parseJSON(localStorage.getItem(SETTINGS_STORE_NAME));
        let defaultSettings = {
            CommentList: localStorage.getItem('BoilerPlateCreators') ? convertOldVarName(localStorage.getItem('BoilerPlateCreators')) : '0',
            AutoCenterOnUr: localStorage.getItem('WithCommentRecenter') ? (localStorage.getItem('WithCommentRecenter') === 'yes' ? true : false) : false,
            AutoClickOpenSolvedNi: localStorage.getItem('AutoClickURStatus') ? (localStorage.getItem('AutoClickURStatus') === 'yes' ? true : false) : false,
            AutoCloseCommentWindow: localStorage.getItem('UrCommentAutoCloseComment') ? (localStorage.getItem('UrCommentAutoCloseComment') === 'yes' ? true : false) : false,
            AutoSaveAfterSolvedOrNiComment: localStorage.getItem('SaveAfterComment') ? (localStorage.getItem('SaveAfterComment') === 'yes' ? true : false) : false,
            AutoSendReminders: localStorage.getItem('URCommentsAutoSendMyReminders') ? $.parseJSON(localStorage.getItem('URCommentsAutoSendMyReminders')) : false,
            AutoSetNewUrComment: localStorage.getItem('AutoSetNewComment') ? (localStorage.getItem('AutoSetNewComment') === 'yes' ? true : false) : false,
            AutoSetReminderUrComment: localStorage.getItem('UrCommentAutoSet4dayComment') ? (localStorage.getItem('UrCommentAutoSet4dayComment') === 'yes' ? true : false) : false,
            AutoSwitchToUrCommentsTab: localStorage.getItem('AutoSwitchToURCommentsTab') ? (localStorage.getItem('AutoSwitchToURCommentsTab') === 'yes' ? true : false) : false,
            AutoZoomInOnNewUr: localStorage.getItem('NewZoomIn') ? (localStorage.getItem('NewZoomIn') === 'yes' ? true : false) : false,
            AutoZoomOutAfterComment: localStorage.getItem('ZoomOutAfterComment') ? (localStorage.getItem('ZoomOutAfterComment') === 'yes' ? true : false) : false,
            DisableDoneNextButtons: localStorage.getItem('UrCommentDisableURDoneBtn') ? $.parseJSON(localStorage.getItem('UrCommentDisableURDoneBtn')) : false,
            DoNotShowTagNameOnPill: localStorage.getItem('URCommentsDontShowTaggedText') ? $.parseJSON(localStorage.getItem('URCommentsDontShowTaggedText')) : false,
            DoubleClickLinkNiComments: localStorage.getItem('DBLClk7DCAutoSend') ? (localStorage.getItem('DBLClk7DCAutoSend') === 'yes' || localStorage.getItem('DBLClkAll') === 'yes' ? true : false) : false,
            DoubleClickLinkOpenComments: localStorage.getItem('DBLClkAll') ? (localStorage.getItem('DBLClkAll') === 'yes' ? true : false) : false,
            DoubleClickLinkSolvedComments: localStorage.getItem('DBLClkAll') ? (localStorage.getItem('DBLClkAll') === 'yes' ? true : false) : false,
            ReplaceTagNameWithEditorName: localStorage.getItem('URCommentsReplaceTagWithEditorName') ? $.parseJSON(localStorage.getItem('URCommentsReplaceTagWithEditorName')) : false,
            UnfollowUrAfterSend: localStorage.getItem('URCommentURUnfollow') ? $.parseJSON(localStorage.getItem('URCommentURUnfollow')) : false,
            HideZoomOutLinks: false,
            ReminderDays: localStorage.getItem('ReminderDays') ? Math.min(13,Math.max(1,parseInt($.parseJSON(localStorage.getItem('ReminderDays'))))) : 3,
            CloseDays: localStorage.getItem('CloseDays') ? Math.min(14,Math.max(2,parseInt($.parseJSON(localStorage.getItem('CloseDays'))))) : 7,
            EnableUrceUrFiltering: localStorage.getItem('URCommentsFilterEnabled') ? $.parseJSON(localStorage.getItem('URCommentsFilterEnabled')) : false,
            EnableUrPillCounts: localStorage.getItem('URCommentsPillEnabled') ? $.parseJSON(localStorage.getItem('URCommentsPillEnabled')) : false,
            OnlyShowMyUrs: localStorage.getItem('URCommentsHideNotMyUR') ? $.parseJSON(localStorage.getItem('URCommentsHideNotMyUR')) : false,
            ShowOthersUrsPastReminderClose: localStorage.getItem('URCommentsShowPastClose') ? $.parseJSON(localStorage.getItem('URCommentsShowPastClose')) : false,
            HideClosedUrs: localStorage.getItem('URCommentsHideClosed') ? $.parseJSON(localStorage.getItem('URCommentsHideClosed')) : false,
            HideTaggedUrs: localStorage.getItem('URCommentsHideNotes') ? $.parseJSON(localStorage.getItem('URCommentsHideNotes')) : false,
            HideWaiting: localStorage.getItem('URCommentsHideInbetween') ? $.parseJSON(localStorage.getItem('URCommentsHideInbetween')) : false,
            HideUrsCloseNeeded: localStorage.getItem('URCommentsHideCloseNeeded') ? $.parseJSON(localStorage.getItem('URCommentsHideCloseNeeded')) : false,
            HideUrsReminderNeeded: localStorage.getItem('URCommentsHideReminderNeeded') ? $.parseJSON(localStorage.getItem('URCommentsHideReminderNeeded')) : false,
            HideUrsWithUserReplies: localStorage.getItem('URCommentsHideReplies') ? $.parseJSON(localStorage.getItem('URCommentsHideReplies')) : false,
            HideUrsWoComments: localStorage.getItem('URCommentsHideInital') ? $.parseJSON(localStorage.getItem('URCommentsHideInital')) : false,
            HideUrsWoCommentsOrDescriptions: localStorage.getItem('URCommentsHideWithoutDescript') ? $.parseJSON(localStorage.getItem('URCommentsHideWithoutDescript')) : false,
            HideUrsWoCommentsWithDescriptions: localStorage.getItem('URCommentsHideWithDescript') ?$.parseJSON( localStorage.getItem('URCommentsHideWithDescript')) : false,
            lastVersion: null
        };
        if (defaultSettings.ReminderDays >= defaultSettings.CloseDays) {
            defaultSettings.ReminderDays = (defaultSettings.CloseDays - 1) < 1 ? 1 : (defaultSettings.CloseDays - 1);
        }
        defaultSettings.ReminderDays = Math.min(13,Math.max(1,parseInt(defaultSettings.ReminderDays)));
        if (defaultSettings.CloseDays <= defaultSettings.ReminderDays) {
            defaultSettings.CloseDays = (defaultSettings.ReminderDays + 1) > 14 ? 14 : (defaultSettings.ReminderDays + 1);
        }
        defaultSettings.CloseDays = Math.min(14,Math.max(2,parseInt(defaultSettings.CloseDays)));
        _settings = loadedSettings ? loadedSettings : defaultSettings;
        for (let prop in defaultSettings) {
            if (!_settings.hasOwnProperty(prop)) {
                _settings[prop] = defaultSettings[prop];
            }
        }
    }

    function saveSettingsToStorage() {
        if(localStorage) {
            _settings.lastVersion = SCRIPT_VERSION;
            localStorage.setItem(SETTINGS_STORE_NAME, JSON.stringify(_settings));
            logDebug('Settings saved.');
        }
    }

    function showScriptInfoAlert() {
        if (ALERT_UPDATE && SCRIPT_VERSION !== _settings.lastVersion) {
            if (!_settings.lastVersion) {
                alert(SCRIPT_VERSION_CHANGES + '\n\nThis is the first time you have loaded URComments-Enhanced. If you have previously used URC, your URC settings have been copied into URC-E.');
            } else {
                alert(SCRIPT_VERSION_CHANGES);
            }
        }
    }

    function waitOnWazeModel(urId, target) {
        return new Promise((resolve, reject) => {
            (function retry(urId, tries, target) {
                tries = tries || 1;
                let data;
                if (target === 'urSessions') {
                    data = W.model.updateRequestSessions.objects[urId];
                } else if (target === 'mapUrType') {
                    data = W.model.mapUpdateRequests.objects[urId].attributes.type;
                }
                if (tries > 100) {
                    reject();
                } else if (data === undefined) {
                    setTimeout(retry, 100, urId, ++tries, target);
                } else {
                    resolve(data);
                }
            })(urId, 1, target);
        });
    }

    function convertOldVarName(oldVarName) {
        let newIdxNum;
        let filterArr = _CommentLists.filter(obj => obj.oldVarName === oldVarName);
        return filterArr.length > 0 ? filterArr[0].idx : 0;
    }

    function isChecked(checkboxId) {
        return $('#' + checkboxId).is(':checked');
    }

    function changeSetting(settingId, settingVal) {
        _settings[settingId] = settingVal;
        saveSettingsToStorage();
    }

    function changeCommentList(commentListIdx) {
        commentListIdx = parseInt(commentListIdx || 0);
        if (commentListIdx != _settings.CommentList) {
            _settings.CommentList = parseInt(commentListIdx);
            buildCommentList(commentListIdx);
            saveSettingsToStorage();
        }
    }

    function getCommentListInfo(commentListIdx) {
        commentListIdx = parseInt(commentListIdx || _settings.CommentList);
        return _CommentLists.find(cList => { return cList.idx === commentListIdx });
    }

    async function handleUpdateRequestContainer(urId) {
        // Expand the comments list automatically
        if ($('#panel-container .problem-edit .conversation').hasClass('collapsed')) {
           $('#panel-container .problem-edit .conversation').removeClass('collapsed');
        }
        // Get rid of the Done / Next buttons
        if (_settings.DisableDoneNextButtons) {
            $('#panel-container .content .navigation').css({'display':'none'});
        }
        // Attach to the center on UR button
        $('#panel-container > div > div > div.top-section > div.header > div.title > div > a.focus').click(function() {
            let x = (W.model.mapUpdateRequests.objects[urId].attributes.geometry.realX === undefined) ? W.model.mapUpdateRequests.objects[urId].attributes.geometry.x : W.model.mapUpdateRequests.objects[urId].attributes.geometry.realX;
            let y = W.model.mapUpdateRequests.objects[urId].attributes.geometry.y;
            W.map.setCenter([x,y], 5);
        });
        try {
            var urSessionObj = await waitOnWazeModel(urId, 'urSessions');
        } catch(err) {
            logError('Timed out waiting for update request session info to load.');
            return;
        }
        try {
            var mapUrType = await waitOnWazeModel(urId, 'mapUrType');
        } catch(err) {
            logError('Timed out waiting for map update request info to load.');
            return;
        }
        if (urSessionObj.length === 0) {
            if (_settings.AutoSetNewUrComment) {
                var commentNum = Object.values(_defaultComments).find(defaultComment => { return defaultComment.urNum === mapUrType }).commentNum;
                let unSavedDetected = autoZoomIn(commentNum, urId);
                if (!unSavedDetected) {
                    postUrComment(_commentList[commentNum].title, _commentList[commentNum].comment, _commentList[commentNum].urcstatus, urId);
                }
            }
        }
    }

    function autoZoomIn(commentNum, urId) {
        let title = _commentList[commentNum].title;
        let comment = _commentList[commentNum].comment;
        let urStatus = _commentList[commentNum].comment;

        let unSavedDetected = false;
        let unSavedCount = $('#edit-buttons > div > div.toolbar-button.waze-icon-save > div.counter').html();

        if (unSavedCount > 0 && _settings.AutoSaveAfterSolvedOrNiComment && urStatus.toLowerCase() !== 'open') {
            unSavedDetected = true;
            alert(I18n.t('urce.prompts.UnsavedEdits'));
        }

        if (_settings.AutoZoomInOnNewUr && commentNum !== _defaultComments.dr.commentNum && commentNum !== _defaultComments.dc.commentNum && !unSavedDetected) {
            let zoom = 4;
            let currentZoom = getZoomLevel();
            if (currentZoom < zoom) {
                let x = (W.model.mapUpdateRequests.objects[urId].attributes.geometry.realX === undefined) ? W.model.mapUpdateRequests.objects[urId].attributes.geometry.x : W.model.mapUpdateRequests.objects[urId].attributes.geometry.realX;
                let y = W.model.mapUpdateRequests.objects[urId].attributes.geometry.y;
                W.map.setCenter([x,y], 5);
            }
            return false;
        } else if (!unSavedDetected) {
            return false;
        } else if (unSavedDetected) {
            return true;
        }
    }

    function getZoomLevel() {
        return W.map.mapState.mapLocation.zoom;
    }

    function postUrComment(title, comment, urStatus, urId, tries) {
        tries = tries || 1;
        if (tries > 100) {
            logError('Timed out waiting for the comment text box to become available.');
            return;
        } else if (!$('.new-comment-text')[0]) {
            //showWmeMessage(I18n.t('urce.prompts.NoCommentBox'), 5000);
            logDebug('Waiting for the comment-box to become available. Retry ' + tries + ' of 100');
            setTimeout(postUrComment, 100, title, comment, urStatus, urId, ++tries);
        } else {
            $('.new-comment-text').val(comment).change();
            $('.new-comment-text').keyup();
        }
    }

    function showWmeMessage(message, delay) {
        let dateNow = new Date().getTime();
        let width = message.length * 10;
        $('#map').append('<div id="urceMessage" style="width:100%; font-size:15px; font-weight:bold; margin-left:auto; position:absolute; top:0px; left:10px; z-index:1000;"></div>');
        $('#urceMessage').append('<div id="urceMapNote' + dateNow + '" style="width:' + width + 'px; font-size: 15px; font-weight:bold; margin-left:auto; margin-right:auto; background-color:orange;"><center><b>' + message + '</b></center></div>');
        $('#urceMapNote' + dateNow).show().delay(delay).queue(function() {
            $('#urceMessage').remove();
            $(this).remove();
        });
    }

    function setupMutationObservers(status) {
        if (status === 'enable' && !_mapUpdateRequestObserver.isObserving) {
            logDebug('Enabling MO');
            _mapUpdateRequestObserver.observe(document.getElementById('panel-container'), { childList: true, attributes: true, characterData: true, subtree: true });
            _mapUpdateRequestObserver.isObserving = true;
        } else if (status === 'disable' && _mapUpdateRequestObserver.isObserving) {
            logDebug('Disabling MO');
            _mapUpdateRequestObserver.disconnect();
            _mapUpdateRequestObserver.isObserving = false;
        }
    }

    function initBackgroundTasks() {
        let parentLayerEnabled = $('#layer-switcher-group_issues').is(':checked');
        let mapIssuesEnabled = $('#layer-switcher-group_map_issues').is(':checked');
        let openUrsEnabled = $('#layer-switcher-item_update_requests').is(':checked');
        let closedUrsEnabled = $('#layer-switcher-item_closed_update_requests').is(':checked');
        $('#layer-switcher-group_issues').change(function() {
            if (!$(this).is(':checked')) {
                setupMutationObservers('disable');
            } else {
                mapIssuesEnabled = $('#layer-switcher-group_map_issues').is(':checked');
                openUrsEnabled = $('#layer-switcher-item_update_requests').is(':checked');
                closedUrsEnabled = $('#layer-switcher-item_closed_update_requests').is(':checked');
                if ((mapIssuesEnabled) && (openUrsEnabled || closedUrsEnabled)) {
                    setupMutationObservers('enable');
                } else {
                    setupMutationObservers('disable');
                }
            }
        });
        $('#layer-switcher-group_map_issues').change(function() {
            if (!$(this).is(':checked')) {
                setupMutationObservers('disable');
            } else {
                openUrsEnabled = $('#layer-switcher-item_update_requests').is(':checked');
                closedUrsEnabled = $('#layer-switcher-item_closed_update_requests').is(':checked');
                if (openUrsEnabled || closedUrsEnabled) {
                    setupMutationObservers('enable');
                } else {
                    setupMutationObservers('disable');
                }
            }
        });
        $('#layer-switcher-item_update_requests').change(function() {
            closedUrsEnabled = $('#layer-switcher-item_closed_update_requests').is(':checked');
            if (!$(this).is(':checked') && !closedUrsEnabled) {
                setupMutationObservers('disable');
            } else {
                setupMutationObservers('enable');
            }
        });
        $('#layer-switcher-item_closed_update_requests').change(function() {
            openUrsEnabled = $('#layer-switcher-item_update_requests').is(':checked');
            if (!$(this).is(':checked') && !openUrsEnabled) {
                setupMutationObservers('disable');
            } else {
                setupMutationObservers('enable');
            }
        });
        if (parentLayerEnabled && mapIssuesEnabled && (openUrsEnabled || closedUrsEnabled)) {
            setupMutationObservers('enable');
        }
    }

    function injectCss() {
        let css = [
            // Comments tab
            '#sidepanel-urc-e #panel-urce-comments .URCE-Comments { text-decoration:none; cursor:pointer; color: #000000; font-size:12px; }',
            '#sidepanel-urc-e #panel-urce-comments .URCE-commentListName { padding-left:12px; font-size:12px; }',
            '#sidepanel-urc-e #panel-urce-comments .URCE-divLoading { text-align:left; color:red; font-size:11px; }',
            '#sidepanel-urc-e #panel-urce-comments .URCE-divCCLinks { text-align:center; }',
            '#sidepanel-urc-e #panel-urce-comments .URCE-divIcon { height:0px; position:relative; top:-3px; left:-100px; }',
            '#sidepanel-urc-e #panel-urce-comments .URCE-icon { cursor:default; }',
            '#sidepanel-urc-e #panel-urce-comments .URCE-chevron { cursor:pointer; font-size:12px; margin-right: 4px; }',
            '#sidepanel-urc-e #panel-urce-comments .URCE-solvedLink { color:#008F00; }',
            '#sidepanel-urc-e #panel-urce-comments .URCE-niLink { color:#E68A00; }',
            '#sidepanel-urc-e #panel-urce-comments .URCE-openLink { color:#000000; }',
            '#sidepanel-urc-e #panel-urce-comments .URCE-doubleClickIcon { padding-bottom:4px; height:16px; float:right; }',
            '#sidepanel-urc-e #panel-urce-comments .URCE-divDoubleClick { display:inline; }',
            '#sidepanel-urc-e #panel-urce-comments .URCE-span { cursor:pointer; }',
            // Settings tab
            '#sidepanel-urc-e #panel-urce-settings .URCE-divWarningPre { margin-left:3px; }',
            '#sidepanel-urc-e #panel-urce-settings .URCE-divWarning { display:inline; }',
            '#sidepanel-urc-e #panel-urce-settings .URCE-divWarningTitle { color:red; text-decoration:underline; }',
            '#sidepanel-urc-e #panel-urce-settings .URCE-divDaysInput { padding-left:25px !important; }',
            '#sidepanel-urc-e #panel-urce-settings .URCE-daysInput { width:38px; height:20px; }',
            '#sidepanel-urc-e #panel-urce-settings .URCE-span { text-transform:uppercase; }',
            // Common
            '#sidepanel-urc-e .URCE-field { border:1px solid silver; padding:8px; border-radius:4px; -webkit-padding-before:0; }',
            '#sidepanel-urc-e .URCE-legend { margin-bottom:0px; border-bottom-style:none; width:auto; }',
            '#sidepanel-urc-e .URCE-divCC { padding-top:2px !important; }',
            '#sidepanel-urc-e .URCE-label { white-space:pre-line; }',
            '#sidepanel-urc-e .URCE-span { font-size:14px; font-weight:600; }',
            '#sidepanel-urc-e .URCE-spanTitle { font-size:14px; font-weight:600; }',
            '#sidepanel-urc-e .URCE-spanVersion { font-size:11px; margin-left:10px; color:#aaa; }',
            '#sidepanel-urc-e .URCE-divTabs { padding:8px; padding-top:2px; }',
            // Main Tabs
            '.URCE-tabIcon { padding-bottom:6px; width:18px; }'
        ].join(' ');
        $('<style = type="text/css">' + css + '</style>').appendTo('head');
    }

/*    function convertCommentListStatic(commentListIdx) {
        commentListIdx = parseInt(commentListIdx || _settings.CommentList);
        let oldVarName = getCommentListInfo(commentListIdx).oldVarName;
        let oldUrcArr = window['Urcomments' + oldVarName + 'Array2'];
        let defaultReminderIdx = window['Urcomments' + oldVarName + 'ReminderPosistion'];
        let closedNiIdx = window['Urcomments' + oldVarName + 'CloseNotIdentifiedPosistion'];
        let data = { 'feed': {
            'entry': [ ]
        } };
        data.feed.entry[0] = { 'title': {'$t':'2018.11.28.01'} };
        data.feed.entry[1] = { 'title': {'$t':'TITLE|COMMENT|URSTATUS|DR|DC|IT|IA|IR|MRA|GE|TNA|IJ|MBO|WDD|ME|MR|ML|BR|MSN|ISPS|SL'} };
        let entryIdx = '2';
        for (let oldUrcArrIdx = 0; oldUrcArrIdx < oldUrcArr.length; oldUrcArrIdx = oldUrcArrIdx + 3) {
            let temp;
            let title = oldUrcArr[oldUrcArrIdx];
            let comment = oldUrcArr[oldUrcArrIdx+1];
            let urstatus = oldUrcArr[oldUrcArrIdx+2] != '' ? oldUrcArr[oldUrcArrIdx+2].toLowerCase() : '';
            if (title.search(/<br>/gi) > -1) {
                urstatus = urstatus == '' ? 'open' : 'GROUP TITLE';
                title = $("<div/>").html(title).text();
            }
            temp = title+'|'+comment+'|'+urstatus;
            temp += (oldUrcArrIdx == defaultReminderIdx) ? '|default_is_true' : '|';
            temp += (oldUrcArrIdx == closedNiIdx) ? '|default_is_true' : '|';
            for (let i=6; i<24; i++) {
                if (i === 17 || i === 20) continue;
                temp += (window['Urcomments' + oldVarName + 'def_names'][i] == title) ? '|default_is_true' : '|';
            }
            data.feed.entry[entryIdx] = { 'title': { '$t':temp} };
            entryIdx++;
        }
        return data;
    } */

    function processCommentListJson(data) {
        let result = {error:null};
        if (!data) result.error = 'No data passed to the JSON processing function.';
        else {
            const EXPECTED_FIELD_NAMES = ['TITLE','COMMENT','URSTATUS','DR','DC','IT','IA','IR','MRA','GE','TNA','IJ','MBO','WDD','ME','MR','ML','BR','MSN','ISPS','SL'];
            let ssFieldNames, groupDivId;
            let checkFieldNames = fldName => ssFieldNames.indexOf(fldName) > -1;
            let commentId = 0
            let blankGroup = 0;
            let doubleClickLinkNiComments = _settings.DoubleClickLinkNiComments;
            let doubleClickLinkOpenComments = _settings.DoubleClickLinkOpenComments;
            let doubleClickLinkSolvedComments = _settings.DoubleClickLinkSolvedComments;
            for (let entryIdx = 0; entryIdx < data.feed.entry.length && !result.error; entryIdx++) {
                let rObj = {};
                let cellValue = data.feed.entry[entryIdx].title.$t;
                if (entryIdx === 0) {
                    // The minimum script version the returned spreadsheet json supports,
                    if (SCRIPT_VERSION < cellValue) {
                        result.error = 'Script must be updated to at least version ' + cellValue + ' before comment definitions can be loaded.';
                    }
                } else if(entryIdx === 1) {
                    // Process / check field names
                    ssFieldNames = cellValue.split('|').map(fldName => fldName.trim());
                    if (ssFieldNames.length !== EXPECTED_FIELD_NAMES.length) {
                        result.error = 'Expected ' + EXPECTED_FIELD_NAMES.length + ' columns in comment definition data. Spreadsheet returned ' + ssFieldNames.length + '.';
                    } else if (!EXPECTED_FIELD_NAMES.every(fldName => checkFieldNames(fldName))) {
                        result.error = 'Script expected to see the following column names in the comment definition spreadsheet:\n' + EXPECTED_FIELD_NAMES.join(', ') + '\nHowever, the spreadsheet returned these:\n' + ssFieldNames.join(', ');
                    }
                } else {
                    let splitRow = cellValue.split('|');
                    let rObj = {};
                    for (let i=0; i<splitRow.length; i++) {
                        let rObjKey = ssFieldNames[i].trim().toLowerCase();
                        rObj[rObjKey] = rObjKey === 'comment' ? splitRow[i] : rObjKey === 'title' ? splitRow[i].trim() : splitRow[i].trim().toLowerCase();
                    }
                    splitRow = rObj;
                    if (splitRow.title === 'URCE_REMOVED_SO_SKIP') {
                        // Nothing to do here. Move along. This is a comment that has been set to 'REMOVED' in the spreadsheet.
                        logDebug('SKIPPING a removed comment.');
                    } else if (splitRow.title === 'URCE_ERROR') {
                        // UH OH . This is bad. Something broke in the arrayformula on the spradsheet.
                        result.error('There is an unknown error in the spreadsheet output. Please contact the list owner.');
                    } else if (splitRow.urstatus === 'group title') {
                        // Group title row. Nothing to set in the arrays, but build html.
                        groupDivId = 'urceComments-for-';
                        if (splitRow.title != '') {
                            groupDivId += splitRow.title.replace(/[^\w]+/gi, '').toLowerCase();
                            if (splitRow.title === splitRow.title.toUpperCase()) {
                                if (splitRow.title.length > 25) {
                                    splitRow.titleMouseOver = splitRow.title;
                                    splitRow.title = splitRow.title.substring(0, 25) + '...';
                                }
                            } else if (splitRow.title.length > 30) {
                                splitRow.titleMouseOver = splitRow.title;
                                splitRow.title = splitRow.title.substring(0, 30) + '...';
                            }
                        } else {
                            groupDivId += 'blankGroup' + (++blankGroup);
                        }
                        $('#_commentList').append(
                            $('<fieldset>', {id:groupDivId, class:'URCE-field'}).append(
                                $('<legend>', {class:'URCE-legend'}).append(
                                    $('<i>', {class:'fa fa-fw fa-chevron-down URCE-chevron'}),
                                    $('<span>', {class:'URCE-span', title:splitRow.titleMouseOver}).text(splitRow.title)
                                ).click(function() {
                                    $($(this).children()[0]).toggleClass('fa fa-fw fa-chevron-down');
                                    $($(this).children()[0]).toggleClass('fa fa-fw fa-chevron-right');
                                    $($(this).siblings()[0]).toggleClass('collapse');
                                })
                            ).append(
                                $('<div>', {id:groupDivId+'_body'})
                            )
                        )
                    } else {
                        // SHOULD be a normal comments row, push values to arrays and build html.
                        if (splitRow.urstatus !== 'solved' && splitRow.urstatus !== 'notidentified' && splitRow.urstatus !== 'open' && splitRow.urstatus !== 'blank line') {
                            result.error = 'Your current selected list does not have a status set for ' + splitRow.title + '. Please contact list owner.';
                        } else {
                            _commentList[commentId] = { 'title':splitRow.title, 'comment':splitRow.comment, 'urstatus':splitRow.urstatus };
                            if (Object.values(splitRow).indexOf('default_is_true') > -1) {
                                let drIdx = ssFieldNames.indexOf('DR');
                                let splitRowDefaultCommentsBoolean = Object.values(splitRow).slice(drIdx);
                                for (let boolIdx = 0; boolIdx < splitRowDefaultCommentsBoolean.length; boolIdx++) {
                                    if (splitRowDefaultCommentsBoolean[boolIdx].toLowerCase() === 'default_is_true') {
                                        _defaultComments[ssFieldNames[(boolIdx+drIdx)].toLowerCase()].commentNum = commentId;
                                    }
                                }
                            }
                            let linkClass;
                            let divDoubleClickId;
                            let divDoubleClickClass;
                            let divDoubleClickStyle = 'display:initial;';
                            if (splitRow.urstatus === 'solved') {
                                linkClass = 'URCE-solvedLink';
                                divDoubleClickId = 'URCE-divDoubleClickSolved';
                                if (!doubleClickLinkSolvedComments) {
                                    divDoubleClickStyle = 'display:none;';
                                }
                            } else if (splitRow.urstatus === 'notidentified') {
                                linkClass = 'URCE-niLink';
                                divDoubleClickId = 'URCE-divDoubleClickNi';
                                if (!doubleClickLinkNiComments) {
                                    divDoubleClickStyle = 'display:none;';
                                }
                            } else {
                                linkClass = 'URCE-openLink';
                                divDoubleClickId = splitRow.title != '' ? 'URCE-divDoubleClickOpen' : 'URCE-divDoubleClickOpen-Hidden';
                                divDoubleClickClass = splitRow.title != '' ? 'URCE-divDoubleClick' : 'URCE-divDoubleClick-Hidden';
                                if (!doubleClickLinkOpenComments || splitRow.urstatus === 'blank line') {
                                    divDoubleClickStyle = 'display:none;';
                                }
                            }
                            $(`#${groupDivId}_body`).append(
                                $('<div>').append(
                                    $('<a>', {class:'URCE-Comments', id:'urce-cid-'+commentId, title:splitRow.comment, class:linkClass + ' URCE-Comments'}).text(splitRow.title).click(function() {
                                        // do something
                                    })
                                ).append(
                                    $('<div>', {class:'URCE-divDoubleClick', id:divDoubleClickId, style:divDoubleClickStyle, title:I18n.t('urce.common.DoubleClickTitle') + '\n' + splitRow.comment}).append(
                                        $('<img>', {src:doublClickIcon, class:'URCE-doubleClickIcon'})
                                    )
                                ).append(
                                    $('<br>')
                                )
                            )
                            commentId++;
                        }
                    }
                }
            }
        }
        return result;
    }

    function commentListAsync(commentListIdx) {
        commentListIdx = parseInt(commentListIdx || _settings.CommentList);
        return new Promise((resolve, reject) => {
/*            if (getCommentListInfo(commentListIdx).type === 'static') {
                let data = convertCommentListStatic(commentListIdx);
                let result = processCommentListJson(data);
                if (!result.error) {
                    resolve(result);
                } else {
                    reject(result);
                }
            } else { */
                $.get({
                    url: getCommentListInfo(commentListIdx).gSheetUrl,
                    success: function(data) {
                        // Critical fields that must be present in the spreadsheet, or script cannot process the data correctly.
                        // If any of these are still null after processing the fields entry, there's a problem.
                        let result = processCommentListJson(data);
                        if (!result.error) {
                            resolve(result);
                        } else {
                            reject(result);
                        }
                    },
                    error: function() {
                        reject({message: 'An error occurred while loading the selected comment lists definition spreadsheet.'});
                    }
                });
//            }
        });
    }


    async function buildCommentList(commentListIdx) {
        commentListIdx = parseInt(commentListIdx || _settings.CommentList);
        try {
            // Clear out the _commentList div so we can rebuild it with the new content
            $('#_commentList').empty();
            $('#_commentList').append(
                $('<div>', {class:'URCE-commentListName'}).text(I18n.t('urce.prefs.CommentList') + ': ' + getCommentListInfo(_settings.CommentList).name)
            );
            // Re-initialize the commentList array.
            _commentList = [];
            // Get it done.
            let result = await commentListAsync(commentListIdx);
            $('#_selCommentList').prop('disabled', false).val(_settings.CommentList);
            $('#_selCommentList option[value="loading"]').remove();
            _urceInitialized = true;
            if (result.error) {
                // We got an error returned from the promise in the result object. Clear the contents of the _commentList div and load error message.
                logError(result.error);
                _urceInitialized = false;
                //return; // Might as well continue on down and remove the lock on the dropdown and remove the loading selection.
            }
        }
        catch(err) {
            logError(err);
            // We received a reject from the promise. Clear the contents of the _commentList div and load error message.
        }
    }

    function initCommentsTab() {
        $('#panel-urce-comments').append(
            $('<div>', {id:'_divZoomOutLinks', class:'controls-container URCE-divCCLinks'}).append(
                $('<div>', {id:'urceIcon', class:'URCE-divIcon'}).append(
                    $('<img>', {src:GM_info.script.icon, class:'URCE-icon'})
                ),
                $('<a>', {id:'zoomOutLink1', class:'URCE-Comments', title:I18n.t('urce.commentsTab.ZoomOutLink1Title')}).text(I18n.t('urce.commentsTab.ZoomOutLink1')).append('<br>'),
                $('<a>', {id:'zoomOutlink2', class:'URCE-Comments', title:I18n.t('urce.commentsTab.ZoomOutLink2Title')}).text(I18n.t('urce.commentsTab.ZoomOutLink2')).append('<br>'),
                $('<a>', {id:'zoomOutlink3', class:'URCE-Comments', title:I18n.t('urce.commentsTab.ZoomOutLink3Title')}).text(I18n.t('urce.commentsTab.ZoomOutLink3')).append('<br>')
            ).append(function() {
                if (_settings.HideZoomOutLinks) $(this).hide();
            }),
            $('<div>', {id:'_commentList', class:'controls-container URCE-divCC'}).append(
                $('<div>', {class:'URCE-divLoading'}).text(I18n.t('urce.common.loading') + ' ' + getCommentListInfo().name + ' comment list. ' + I18n.t('urce.common.pleaseWait') + '...')
            )
        )
    }

    function initSettingsTab() {
        $('#panel-urce-settings').append(
            // Comment List
            $('<fieldset>', {class:'URCE-field'}).append(
                $('<legend>', {class:'URCE-legend'}).append(
                    $('<span>', {class:'URCE-span'}).text(I18n.t('urce.prefs.CommentList'))
                ),
                $('<div>', {class:'controls-container URCE-divCC'}).append(function() {
                    let selList = $('<select>', {id:'_selCommentList'});
                    _CommentLists.forEach(cList => {
                        if (cList.idx === _settings.CommentList) {
                            selList.append($('<option>', {value:cList.idx, selected:true}).text(cList.name));
                        } else {
                            selList.append($('<option>', {value:cList.idx}).text(cList.name));
                        }
                    });
                    selList.append($('<option>', {value:'loading'}).text('...' + I18n.t('urce.common.loading') + '...'));
                    return selList.prop('disabled', true).val('loading').change(function() {
                        changeCommentList($(this).val());
                    });
                }),
            ),
            // URC-E Preferences
            $('<fieldset>', {class:'URCE-field'}).append(
                $('<legend>', {class:'URCE-legend'}).append(
                    $('<span>', {class:'URCE-span'}).text(I18n.t('urce.prefs.UrcePrefs'))
                ),
                $('<div>', {class:'controls-container URCE-divCC'}).append(
                    $('<input>', {type:'checkbox', id:'_cbAutoCenterOnUr'}).change(function() { changeSetting('AutoCenterOnUr', $(this).is(':checked')); }).prop('checked', _settings.AutoCenterOnUr),
                    $('<label>', {for:'_cbAutoCenterOnUr', title:I18n.t('urce.prefs.AutoCenterOnUrTitle'), class:'URCE-label'}).text(I18n.t('urce.prefs.AutoCenterOnUr')),
                    $('<br>'),
                    $('<input>', {type:'checkbox', id:'_cbAutoClickOpenSolvedNi'}).change(function() {
                        _settings.AutoClickOpenSolvedNi = $(this).is(':checked');
                        if (!$(this).is(':checked')) {
                            if (isChecked('_cbAutoSaveAfterSolvedOrNiComment')) {
                                _settings.AutoSaveAfterSolvedOrNiComment = false;
                                $('#_cbAutoSaveAfterSolvedOrNiComment').prop('checked', false);
                            }
                            if (isChecked('_cbDoubleClickLinkCloseComments')) {
                                _settings.DoubleClickLinkCloseComments = false;
                                $('#_cbDoubleClickLinkCloseComments').prop('checked', false);
                            }
                            if (isChecked('_cbDoubleClickLinkAllComments')) {
                                _settings.DoubleClickLinkAllComments = false;
                                $('#_cbDoubleClickLinkAllComments').prop('checked', false);
                            }
                        }
                        saveSettingsToStorage();
                    }).prop('checked', _settings.AutoClickOpenSolvedNi),
                    $('<label>', {for:'_cbAutoClickOpenSolvedNi', title:I18n.t('urce.prefs.AutoClickOpenSolvedNiTitle'), class:'URCE-label'}).text(I18n.t('urce.prefs.AutoClickOpenSolvedNi')),
                    $('<br>'),
                    $('<input>', {type:'checkbox', id:'_cbAutoCloseCommentWindow'}).change(function() { changeSetting('AutoCloseCommentWindow', $(this).is(':checked')); }).prop('checked', _settings.AutoCloseCommentWindow),
                    $('<label>', {for:'_cbAutoCloseCommentWindow', title:I18n.t('urce.prefs.AutoCloseCommentWindowTitle'), class:'URCE-label'}).text(I18n.t('urce.prefs.AutoCloseCommentWindow')),
                    $('<br>'),
                    $('<input>', {type:'checkbox', id:'_cbAutoSaveAfterSolvedOrNiComment'}).change(function() {
                        _settings.AutoSaveAfterSolvedOrNiComment = $(this).is(':checked');
                        if ($(this).is(':checked') && !isChecked('_cbAutoClickOpenSolvedNi')) {
                            _settings.AutoClickOpenSolvedNi = true;
                            $('#_cbAutoClickOpenSolvedNi').prop('checked', true);
                        }
                        saveSettingsToStorage();
                    }).prop('checked', _settings.AutoSaveAfterSolvedOrNiComment),
                    $('<label>', {for:'_cbAutoSaveAfterSolvedOrNiComment', title:I18n.t('urce.prefs.AutoSaveAfterSolvedOrNiCommentTitle'), class:'URCE-label'}).text(I18n.t('urce.prefs.AutoSaveAfterSolvedOrNiComment')),
                    $('<br>'),
                    $('<input>', {type:'checkbox', id:'_cbAutoSendReminders'}).change(function() { changeSetting('AutoSendReminders', $(this).is(':checked')); }).prop('checked', _settings.AutoSendReminders),
                    $('<label>', {for:'_cbAutoSendReminders', title:I18n.t('urce.prefs.AutoSendRemindersTitle'), class:'URCE-label'}).text(I18n.t('urce.prefs.AutoSendReminders')),
                    $('<div>', {class:'URCE-divWarning URCE-divWarningPre'}).text('(').append(
                        $('<div>', {class:'URCE-divWarning URCE-divWarningTitle', title:I18n.t('urce.prefs.AutoSendRemindersWarningTitle')}).text(I18n.t('urce.prefs.AutoSendRemindersWarning')),
                    ).append(
                        $('<div>', {class:'URCE-divWarning'}).text(')')
                    ),
                    $('<br>'),
                    $('<input>', {type:'checkbox', id:'_cbAutoSetNewUrComment'}).change(function() { changeSetting('AutoSetNewUrComment', $(this).is(':checked')); }).prop('checked', _settings.AutoSetNewUrComment),
                    $('<label>', {for:'_cbAutoSetNewUrComment', title:I18n.t('urce.prefs.AutoSetNewUrCommentTitle'), class:'URCE-label'}).text(I18n.t('urce.prefs.AutoSetNewUrComment')),
                    $('<br>'),
                    $('<input>', {type:'checkbox', id:'_cbAutoSetReminderUrComment'}).change(function() { changeSetting('AutoSetReminderUrComment', $(this).is(':checked')); }).prop('checked', _settings.AutoSetReminderUrComment),
                    $('<label>', {for:'_cbAutoSetReminderUrComment', title:I18n.t('urce.prefs.AutoSetReminderUrCommentTitle'), class:'URCE-label'}).text(I18n.t('urce.prefs.AutoSetReminderUrComment')),
                    $('<br>'),
                    $('<input>', {type:'checkbox', id:'_cbAutoSwitchToUrCommentsTab'}).change(function() { changeSetting('AutoSwitchToUrCommentsTab', $(this).is(':checked')); }).prop('checked', _settings.AutoSwitchToUrCommentsTab),
                    $('<label>', {for:'_cbAutoSwitchToUrCommentsTab', title:I18n.t('urce.prefs.AutoSwitchToUrCommentsTabTitle'), class:'URCE-label'}).text(I18n.t('urce.prefs.AutoSwitchToUrCommentsTab')),
                    $('<br>'),
                    $('<input>', {type:'checkbox', id:'_cbAutoZoomInOnNewUr'}).change(function() { changeSetting('AutoZoomInOnNewUr', $(this).is(':checked')); }).prop('checked', _settings.AutoZoomInOnNewUr),
                    $('<label>', {for:'_cbAutoZoomInOnNewUr', title:I18n.t('urce.prefs.AutoZoomInOnNewUrTitle'), class:'URCE-label'}).text(I18n.t('urce.prefs.AutoZoomInOnNewUr')),
                    $('<br>'),
                    $('<input>', {type:'checkbox', id:'_cbAutoZoomOutAfterComment'}).change(function() { changeSetting('AutoZoomOutAfterComment', $(this).is(':checked')); }).prop('checked', _settings.AutoZoomOutAfterComment),
                    $('<label>', {for:'_cbAutoZoomOutAfterComment', title:I18n.t('urce.prefs.AutoZoomOutAfterCommentTitle'), class:'URCE-label'}).text(I18n.t('urce.prefs.AutoZoomOutAfterComment')),
                    $('<br>'),
                    $('<input>', {type:'checkbox', id:'_cbDisableDoneNextButtons'}).change(function() { changeSetting('DisableDoneNextButtons', $(this).is(':checked')); }).prop('checked', _settings.DisableDoneNextButtons),
                    $('<label>', {for:'_cbDisableDoneNextButtons', title:I18n.t('urce.prefs.DisableDoneNextButtonsTitle'), class:'URCE-label'}).text(I18n.t('urce.prefs.DisableDoneNextButtons')),
                    $('<br>'),
                    $('<input>', {type:'checkbox', id:'_cbDoNotShowTagNameOnPill'}).change(function() { changeSetting('DoNotShowTagNameOnPill', $(this).is(':checked')); }).prop('checked', _settings.DoNotShowTagNameOnPill),
                    $('<label>', {for:'_cbDoNotShowTagNameOnPill', title:I18n.t('urce.prefs.DoNotShowTagNameOnPillTitle'), class:'URCE-label'}).text(I18n.t('urce.prefs.DoNotShowTagNameOnPill')),
                    $('<br>'),
                    $('<input>', {type:'checkbox', id:'_cbDoubleClickLinkNiComments'}).change(function() {
                        _settings.DoubleClickLinkNiComments = $(this).is(':checked');
                        if (!$(this).is(':checked')) {
                            $('div#URCE-divDoubleClickNi').hide();
                        } else {
                            $('div#URCE-divDoubleClickNi').show();
                        }
                        saveSettingsToStorage();
                    }).prop('checked', _settings.DoubleClickLinkNiComments),
                    $('<label>', {for:'_cbDoubleClickLinkNiComments', title:I18n.t('urce.prefs.DoubleClickLinkNiCommentsTitle'), class:'URCE-label'}).text(I18n.t('urce.prefs.DoubleClickLinkNiComments')),
                    $('<br>'),
                    $('<input>', {type:'checkbox', id:'_cbDoubleClickLinkOpenComments'}).change(function() {
                        _settings.DoubleClickLinkOpenComments = $(this).is(':checked');
                        if (!$(this).is(':checked')) {
                            $('div#URCE-divDoubleClickOpen').hide();
                        } else {
                            $('div#URCE-divDoubleClickOpen').show();
                        }
                        saveSettingsToStorage();
                    }).prop('checked', _settings.DoubleClickLinkOpenComments),
                    $('<label>', {for:'_cbDoubleClickLinkOpenComments', title:I18n.t('urce.prefs.DoubleClickLinkOpenCommentsTitle'), class:'URCE-label'}).text(I18n.t('urce.prefs.DoubleClickLinkOpenComments')),
                    $('<br>'),
                    $('<input>', {type:'checkbox', id:'_cbDoubleClickLinkSolvedComments'}).change(function() {
                        _settings.DoubleClickLinkSolvedComments = $(this).is(':checked');
                        if (!$(this).is(':checked')) {
                            $('div#URCE-divDoubleClickSolved').hide();
                        } else {
                            $('div#URCE-divDoubleClickSolved').show();
                        }
                        saveSettingsToStorage();
                    }).prop('checked', _settings.DoubleClickLinkSolvedComments),
                    $('<label>', {for:'_cbDoubleClickLinkSolvedComments', title:I18n.t('urce.prefs.DoubleClickLinkSolvedCommentsTitle'), class:'URCE-label'}).text(I18n.t('urce.prefs.DoubleClickLinkSolvedComments')),
                    $('<br>'),
                    $('<input>', {type:'checkbox', id:'_cbHideZoomOutLinks'}).change(function() {
                        changeSetting('HideZoomOutLinks', $(this).is(':checked'));
                        if ($(this).is(':checked')) {
                            $('div#_divZoomOutLinks').hide();
                        } else {
                            $('div#_divZoomOutLinks').show();
                        }
                    }).prop('checked', _settings.HideZoomOutLinks),
                    $('<label>', {for:'_cbHideZoomOutLinks', title:I18n.t('urce.prefs.HideZoomOutLinksTitle'), class:'URCE-label'}).text(I18n.t('urce.prefs.HideZoomOutLinks')),
                    $('<br>'),
                    $('<input>', {type:'checkbox', id:'_cbUnfollowUrAfterSend'}).change(function() { changeSetting('UnfollowUrAfterSend', $(this).is(':checked')); }).prop('checked', _settings.UnfollowUrAfterSend),
                    $('<label>', {for:'_cbUnfollowUrAfterSend', title:I18n.t('urce.prefs.UnfollowUrAfterSendTitle'), class:'URCE-label'}).text(I18n.t('urce.prefs.UnfollowUrAfterSend')),
                    $('<br>'),
                    $('<div>', {class:'URCE-divDaysInput'}).append(
                        $('<div>', {title:I18n.t('urce.prefs.ReminderDaysTitle'), class:'URCE-label'}).append(I18n.t('urce.prefs.ReminderDays') + ': ').append(
                            $('<input>', {type:'number', id:'_numReminderDays', class:'URCE-daysInput', min:'1', max:'14', step:'1', value:_settings.ReminderDays, title:I18n.t('urce.prefs.ReminderDaysTitle')}).on('change', function() { // tried keyup, mousup, but this works good enough
                                let numReminderDays = Math.abs(parseInt(this.value, 10) || 1);
                                if (numReminderDays >= _settings.CloseDays) {
                                    numReminderDays = (_settings.CloseDays - 1) < 1 ? 1 : (_settings.CloseDays - 1);
                                }
                                numReminderDays = Math.min(13,Math.max(1,parseInt(numReminderDays)));
                                changeSetting('ReminderDays', numReminderDays);
                                this.value = numReminderDays;
                            })
                        ),
                        $('<div>', {title:I18n.t('urce.prefs.CloseDaysTitle'), class:'URCE-label'}).append(I18n.t('urce.prefs.CloseDays') + ': ').append(
                            $('<input>', {type:'number', id:'_numCloseDays', class:'URCE-daysInput', min:'1', max:'14', step:'1', value:_settings.CloseDays, title:I18n.t('urce.prefs.CloseDaysTitle')}).on('change', function() { // tried keyup, mousup, but this works good enough
                                let numCloseDays = Math.abs(parseInt(this.value, 10) || 1);
                                if (numCloseDays <= _settings.ReminderDays) {
                                    numCloseDays = (_settings.ReminderDays + 1) > 14 ? 14 : (_settings.ReminderDays + 1);
                                }
                                numCloseDays = Math.min(14,Math.max(2,parseInt(numCloseDays)));
                                changeSetting('CloseDays', numCloseDays);
                                this.value = numCloseDays;
                            })
                        )
                    )
                )
            ),
            // UR Filtering Preferences
            $('<fieldset>', {class:'URCE-field'}).append(
                $('<legend>', {class:'URCE-legend'}).append(
                    $('<span>', {class:'URCE-span'}).text(I18n.t('urce.prefs.UrFilteringPrefs'))
                ),
                $('<div>', {class:'controls-container URCE-divCC'}).append(
                    $('<input>', {type:'checkbox', id:'_cbEnableUrceUrFiltering'}).change(function() { changeSetting('EnableUrceUrFiltering', $(this).is(':checked')); }).prop('checked', _settings.EnableUrceUrFiltering),
                    $('<label>', {for:'_cbEnableUrceUrFiltering', title:I18n.t('urce.prefs.EnableUrceUrFilteringTitle'), class:'URCE-label'}).text(I18n.t('urce.prefs.EnableUrceUrFiltering')),
                    $('<br>'),
                    $('<input>', {type:'checkbox', id:'_cbEnableUrPillCounts'}).change(function() { changeSetting('EnableUrPillCounts', $(this).is(':checked')); }).prop('checked', _settings.EnableUrPillCounts),
                    $('<label>', {for:'_cbEnableUrPillCounts', title:I18n.t('urce.prefs.EnableUrPillCountsTitle'), class:'URCE-label'}).text(I18n.t('urce.prefs.EnableUrPillCounts')),
                    $('<br>'),
                    $('<input>', {type:'checkbox', id:'_cbOnlyShowMyUrs'}).change(function() { changeSetting('OnlyShowMyUrs', $(this).is(':checked')); }).prop('checked', _settings.OnlyShowMyUrs),
                    $('<label>', {for:'_cbOnlyShowMyUrs', title:I18n.t('urce.prefs.OnlyShowMyUrsTitle'), class:'URCE-label'}).text(I18n.t('urce.prefs.OnlyShowMyUrs')),
                    $('<br>'),
                    $('<input>', {type:'checkbox', id:'_cbShowOthersUrsPastReminderClose'}).change(function() { changeSetting('ShowOthersUrsPastReminderClose', $(this).is(':checked')); }).prop('checked', _settings.ShowOthersUrsPastReminderClose),
                    $('<label>', {for:'_cbShowOthersUrsPastReminderClose', title:I18n.t('urce.prefs.ShowOthersUrsPastReminderCloseTitle'), class:'URCE-label'}).text(I18n.t('urce.prefs.ShowOthersUrsPastReminderClose')),
                    $('<br>'),
                    $('<input>', {type:'checkbox', id:'_cbHideClosedUrs'}).change(function() { changeSetting('HideClosedUrs', $(this).is(':checked')); }).prop('checked', _settings.HideClosedUrs),
                    $('<label>', {for:'_cbHideClosedUrs', title:I18n.t('urce.prefs.HideClosedUrsTitle'), class:'URCE-label'}).text(I18n.t('urce.prefs.HideClosedUrs')),
                    $('<br>'),
                    $('<input>', {type:'checkbox', id:'_cbHideTaggedUrs'}).change(function() { changeSetting('HideTaggedUrs', $(this).is(':checked')); }).prop('checked', _settings.HideTaggedUrs),
                    $('<label>', {for:'_cbHideTaggedUrs', title:I18n.t('urce.prefs.HideTaggedUrsTitle'), class:'URCE-label'}).text(I18n.t('urce.prefs.HideTaggedUrs')),
                    $('<br>'),
                    $('<input>', {type:'checkbox', id:'_cbHideWaiting'}).change(function() { changeSetting('HideWaiting', $(this).is(':checked')); }).prop('checked', _settings.HideWaiting),
                    $('<label>', {for:'_cbHideWaiting', title:I18n.t('urce.prefs.HideWaitingTitle'), class:'URCE-label'}).text(I18n.t('urce.prefs.HideWaiting')),
                    $('<br>'),
                    $('<input>', {type:'checkbox', id:'_cbHideUrsCloseNeeded'}).change(function() { changeSetting('HideUrsCloseNeeded', $(this).is(':checked')); }).prop('checked', _settings.HideUrsCloseNeeded),
                    $('<label>', {for:'_cbHideUrsCloseNeeded', title:I18n.t('urce.prefs.HideUrsCloseNeededTitle'), class:'URCE-label'}).text(I18n.t('urce.prefs.HideUrsCloseNeeded')),
                    $('<br>'),
                    $('<input>', {type:'checkbox', id:'_cbHideUrsReminderNeeded'}).change(function() { changeSetting('HideUrsReminderNeeded', $(this).is(':checked')); }).prop('checked', _settings.HideUrsReminderNeeded),
                    $('<label>', {for:'_cbHideUrsReminderNeeded', title:I18n.t('urce.prefs.HideUrsReminderNeededTitle'), class:'URCE-label'}).text(I18n.t('urce.prefs.HideUrsReminderNeeded')),
                    $('<br>'),
                    $('<input>', {type:'checkbox', id:'_cbHideUrsWithUserReplies'}).change(function() { changeSetting('HideUrsWithUserReplies', $(this).is(':checked')); }).prop('checked', _settings.HideUrsWithUserReplies),
                    $('<label>', {for:'_cbHideUrsWithUserReplies', title:I18n.t('urce.prefs.HideUrsWithUserRepliesTitle'), class:'URCE-label'}).text(I18n.t('urce.prefs.HideUrsWithUserReplies')),
                    $('<br>'),
                    $('<input>', {type:'checkbox', id:'_cbHideUrsWoComments'}).change(function() { changeSetting('HideUrsWoComments', $(this).is(':checked')); }).prop('checked', _settings.HideUrsWoComments),
                    $('<label>', {for:'_cbHideUrsWoComments', title:I18n.t('urce.prefs.HideUrsWoCommentsTitle'), class:'URCE-label'}).text(I18n.t('urce.prefs.HideUrsWoComments')),
                    $('<br>'),
                    $('<input>', {type:'checkbox', id:'_cbHideUrsWoCommentsOrDescriptions'}).change(function() { changeSetting('HideUrsWoCommentsOrDescriptions', $(this).is(':checked')); }).prop('checked', _settings.HideUrsWoCommentsOrDescriptions),
                    $('<label>', {for:'_cbHideUrsWoCommentsOrDescriptions', title:I18n.t('urce.prefs.HideUrsWoCommentsOrDescriptionsTitle'), class:'URCE-label'}).text(I18n.t('urce.prefs.HideUrsWoCommentsOrDescriptions')),
                    $('<br>'),
                    $('<input>', {type:'checkbox', id:'_cbHideUrsWoCommentsWithDescriptions'}).change(function() { changeSetting('HideUrsWoCommentsWithDescriptions', $(this).is(':checked')); }).prop('checked', _settings.HideUrsWoCommentsWithDescriptions),
                    $('<label>', {for:'_cbHideUrsWoCommentsWithDescriptions', title:I18n.t('urce.prefs.HideUrsWoCommentsWithDescriptionsTitle'), class:'URCE-label'}).text(I18n.t('urce.prefs.HideUrsWoCommentsWithDescriptions')),
                    $('<input>', {type:'checkbox', id:'_cbReplaceTagNameWithEditorName'}).change(function() { changeSetting('ReplaceTagNameWithEditorName', $(this).is(':checked')); }).prop('checked', _settings.ReplaceTagNameWithEditorName),
                    $('<label>', {for:'_cbReplaceTagNameWithEditorName', title:I18n.t('urce.prefs.ReplaceTagNameWithEditorNameTitle'), class:'URCE-label'}).text(I18n.t('urce.prefs.ReplaceTagNameWithEditorName'))
                )
            )
        )
    }

    function initTab() {
        initSettingsTab();
        initCommentsTab();
        $('a[href="#sidepanel-urc-e"]').prepend($('<img>', {class:'URCE-tabIcon', src:GM_info.script.icon}));
    }

    function initGui() {
        let $content = $('<div>').append(
            $('<span>', {class:'URCE-spanTitle'}).text(I18n.t('urce.common.title')),
            $('<span>', {class:'URCE-spanVersion'}).text(GM_info.script.version),
            '<ul class="nav nav-tabs">' +
            '<li class="active"><a data-toggle="tab" href="#panel-urce-comments" aria-expanded="true">' + I18n.t('urce.tabs.Comments') + '</a></li>' +
            '<li><a data-toggle="tab" href="#panel-urce-settings" aria-expanded="true">' + I18n.t('urce.tabs.Settings') + '</a></li>' +
            '</ul>',
            $('<div>', {class:'tab-content URCE-divTabs'}).append(
                $('<div>', {class:'tab-pane active', id:'panel-urce-comments'}),
                $('<div>', {class:'tab-pane', id:'panel-urce-settings'})
                )
            ).html();
        injectCss();
        new WazeWrap.Interface.Tab('URC-E', $content, initTab, null);
        $('div#sidepanel-urc-e').width('290px');
        showScriptInfoAlert();
    }

    function init() {
        loadSettingsFromStorage();
        loadTranslations();
        initGui();
        window.addEventListener("beforeunload", function() {
            saveSettingsToStorage();
        }, false);
        log('Initialized.');
        saveSettingsToStorage();
        buildCommentList();
        (function waitForCommentList(tries) {
            tries = tries || 1;
            if (tries > 300) {
                logError('Timed out waiting on comment list to be built.');
            } else if (!_urceInitialized) {
                logDebug('Waiting for comment list to be built. Try ' + tries + ' of 300.');
                setTimeout(waitForCommentList, 100, ++tries);
            } else {
                initBackgroundTasks();
            }
        })();
    }

    function bootstrap(tries) {
        tries = tries || 1;
        if (W &&
            W.map &&
            W.model &&
            $ && WazeWrap.Ready) {
            log('Initializing...');
            init();
        } else if (tries < 1000) {
            logDebug('Bootstrap failed. Retrying ' + tries + ' of 1000');
            setTimeout(function () { bootstrap(++tries); }, 200);
        } else {
            logError('Bootstrap timed out waiting for WME to become ready.');
        }
    }

    bootstrap();

    function loadTranslations() {
        setTranslations({
            en: {
                prefs: {
                    // Comment List
                    CommentList: 'Comment List',
                    CommentListTitle: 'Select the custom list you would like to use. CommentTeam is the default. If you would like your comment list built into this script or have suggestions on the CommentTeam list, please contact dBsooner on Discord or via PM.',
                    // URC-E Preferences
                    UrcePrefs: 'URC-E Preferences',
                    AutoCenterOnUr: 'Auto center on UR',
                    AutoCenterOnUrTitle: 'Auto Center the map at the current map zoom to the selected UR when it has comments and the zoom is less than 3.',
                    AutoClickOpenSolvedNi: 'Auto click open, solved or not identified',
                    AutoClickOpenSolvedNiTitle: 'Suppress the message about recent pending questions to the reporter and then, depending on the choice set for that comment, clicks Open, Solved or Not Identified.',
                    AutoCloseCommentWindow: 'Auto close comment window',
                    AutoCloseCommentWindowTitle: 'This will automatically close the UR window for user requests that do not require saving after you click a UR comment in the list and then the send button.',
                    AutoSaveAfterSolvedOrNiComment: 'Auto save after solved or NI comment',
                    AutoSaveAfterSolvedOrNiCommentTitle: 'If \'Auto Click Open, Solved or Not Identified\' is also checked, this will click the save button after clicking a UR comment in the list and then the send button.',
                    AutoSendReminders: 'Auto send reminders',
                    AutoSendRemindersTitle: 'Auto send reminders to your URs on the screen.',
                    AutoSendRemindersWarning: 'WARNING',
                    AutoSendRemindersWarningTitle: 'This will AUTOMATICALLY send reminders at the reminder days setting (currently: ' + _settings.ReminderDays + ' days).\nThis only happens when they are visible on your screen.\n\nNOTE: When using this feature you should not leave URs open unless you asked a question\nthat needs a response from the reporter, as this script will send reminders to all open URs\nafter \'Reminder days\'.',
                    AutoSetNewUrComment: 'Auto set new UR comment',
                    AutoSetNewUrCommentTitle: 'Auto set the default UR comment for the UR type on new URs that do not already have comments.',
                    AutoSetReminderUrComment: 'Auto set reminder UR comment',
                    AutoSetReminderUrCommentTitle: 'Auto set the UR reminder comment for URs that are older than the \'Reminder days\' setting and have only one comment.',
                    AutoSwitchToUrCommentsTab: 'Auto switch to the URC-E tab',
                    AutoSwitchToUrCommentsTabTitle: 'Auto switch to the URComments-Enhanced tab when opening a UR. When the UR window is closed you will be switched back to your previous tab.',
                    AutoZoomInOnNewUr: 'Auto zoom in on new UR',
                    AutoZoomInOnNewUrTitle: 'Auto zoom in when opening URs with no comments and when sending UR reminders.',
                    AutoZoomOutAfterComment: 'Auto zoom out after comment',
                    AutoZoomOutAfterCommentTitle: 'After clicking on a UR comment in the list and then clicking send on the UR, the map zoom will be set back to your previous zoom.',
                    DisableDoneNextButtons: 'Disable done / next buttons',
                    DisableDoneNextButtonsTitle: 'Disable the done / next buttons at the bottom of the new UR window.',
                    DoNotShowTagNameOnPill: 'Don\'t show tag name on pill',
                    DoNotShowTagNameOnPillTitle: 'Do not show the tag name on the pill where there is a URO tag.',
                    DoubleClickLinkNiComments: 'Double click link - NI comments',
                    DoubleClickLinkNiCommentsTitle: 'Add an extra link to the \'not identified\' comments. When double clicked it will automatically send the comment to the UR window, click send, and then will launch all of the other options that are enabled.',
                    DoubleClickLinkOpenComments: 'Double click link - Open comments',
                    DoubleClickLinkOpenCommentsTitle: 'Add an extra link to the \'open\' comments. When double clicked it will automatically send the comment to the UR window, click send, and then will launch all of the other options that are enabled.',
                    DoubleClickLinkSolvedComments: 'Double click link - Solved comments',
                    DoubleClickLinkSolvedCommentsTitle: 'Add an extra link to the \'solved\' comments. When double clicked it will automatically send the comment to the UR window, click send, and then will launch all of the other options that are enabled.',
                    HideZoomOutLinks: 'Hide zoom out links',
                    HideZoomOutLinksTitle: 'Hide the zoom out links on the comments tab.',
                    UnfollowUrAfterSend: 'Unfollow UR after send',
                    UnfollowUrAfterSendTitle: 'Unfollow the UR after sending a comment.',
                    ReminderDays: 'Reminder days',
                    ReminderDaysTitle: 'Number of days to (automatically) set reminder comment. Must be between 1 and 13 and less than \'Close days\'.',
                    CloseDays: 'Close days',
                    CloseDaysTitle: 'Number of days to (automatically) close URs. Must be between 2 and 14 and greater than \'Reminder days\'.',
                    // UR Filtering Preferences
                    UrFilteringPrefs: 'UR Filtering Preferences',
                    EnableUrceUrFiltering: 'Enable URC-E UR filtering',
                    EnableUrceUrFilteringTitle: 'Enable or disable URComments-Enhanced built-in UR filtering.',
                    EnableUrPillCounts: 'Enable UR pill counts',
                    EnableUrPillCountsTitle: 'Enable or disable the pill with UR counts.',
                    HideClosedUrs: 'Hide closed URs',
                    HideClosedUrsTitle: 'Hide closed URs.',
                    HideTaggedUrs: 'Hide tagged URs',
                    HideTaggedUrsTitle: 'Hide URs that are tagged with URO+ style tags. Ex: [NOTE].',
                    HideWaiting: 'Hide waiting',
                    HideWaitingTitle: 'Only show URs that need work (hide URs in other parts of the life-cycle).',
                    HideUrsCloseNeeded: 'Hide URs where close needed',
                    HideUrsCloseNeededTitle: 'Hide URs that need closing.',
                    HideUrsReminderNeeded: 'Hide URs where reminders needed',
                    HideUrsReminderNeededTitle: 'Hide URs where reminders are needed.',
                    HideUrsWithUserReplies: 'Hide URs with user replies',
                    HideUrsWithUserRepliesTitle: 'Hide UR with user replies.',
                    HideUrsWoComments: 'Hide URs w/o comments',
                    HideUrsWoCommentsTitle: 'Hide URs that have zero comments.',
                    HideUrsWoCommentsOrDescriptions: 'Hide URs w/o comments or descripts',
                    HideUrsWoCommentsOrDescriptionsTitle: 'Hide URs that do not have descriptions or comments.',
                    HideUrsWoCommentsWithDescriptions: 'Hide URs w/o comments w/ descripts',
                    HideUrsWoCommentsWithDescriptionsTitle: 'Hide URs that have descriptions and zero comments.',
                    OnlyShowMyUrs: 'Only show my URs',
                    OnlyShowMyUrsTitle: 'Hide URs where you have no comments.',
                    ShowOthersUrsPastReminderClose: 'Show others URs past remind+close',
                    ShowOthersUrsPastReminderCloseTitle: 'Show URs that others commented on that have gone past the reminder and close day settings added together.',
                    ReplaceTagNameWithEditorName: 'Replace tag name with editor name',
                    ReplaceTagNameWithEditorNameTitle: 'When a UR has the logged in editors name in the description or any of the comments of the UR (not the name Waze automatically adds when commenting), replace the tag type with the editors name.'
                },
                tabs: {
                    Comments: 'Comments',
                    Settings: 'Settings'
                },
                common: {
                    title: 'URComments-Enhanced',
                    DoubleClickTitle: 'Double click here to send this comment:',
                    loading: 'Loading',
                    pleaseWait: 'Please wait',
                    errorGeneric: 'An error has occurred within URC-E. Please contact dBsooner via Discord or PM.'
                },
                prompts: {
                    FilterUrs2Abort: 'URC-E - Aborting FilterURs2 because filtering, counts and auto reminders are disabled.',
                    LoadingUrDataTimeout: 'URC-E: Loading UR data has timed out, retrying.',
                    NoCommentBox: 'URC-E: Unable to find the comment box! In order for this script to work, you need to have a UR open.',
                    ReminderMessageAuto: 'URC-E: Adding reminder message to UR: ',
                    UnsavedEdits: 'URC-E has detected that you hav unsaved edits!\n\nWith the \'Auto save\' option enabled, you cannot send comments that would require the script to save, if you have previous unsaved edits. Please save your edits and then re-click the comment you wish to send.',
                    UrFilteringDisabled: 'URC-E\'s UR Filtering has been disabled because URO+\'s UR filters are active.'
                },
                commentsTab: {
                    ZoomOutLink1: 'Zoom out 0 & close UR',
                    ZoomOutLink1Title: 'Zooms all the way out and closes the UR dialogue.',
                    ZoomOutLink2: 'Zoom out 2 & close UR',
                    ZoomOutLink2Title: 'Zooms out to level 2 and closes the UR dialogue.',
                    ZoomOutLink3: 'Zoom out 3 & close UR',
                    ZoomOutLink3Title: 'Zooms out to level 3 and closes the UR dialogue.'
                }
            },
            "es-419": {
            },
            fr: {
            }
        });
    }

    function setTranslations(translations) {
        I18n.translations[I18n.currentLocale()].urce = translations.en;
        for (let i = 0; i < Object.keys(translations).length; i++) {
            let locale = Object.keys(translations)[i];
            if (I18n.currentLocale() == locale) {
                I18n.translations[locale].urce.prefs = translations[locale].prefs;
                return;
            }
        }
    }
})();
