let _host = '//xiaolei.quanxun_admin.leyoule1.com';
// let _host = 'https://admin.bct6686.com';
let httpUrl = {
    'activity_url': _host + '/api/activity',
    'activity_all': _host + '/api/activity_all',
    'match_url': _host + '/api/match',
    'view_url': _host + '/api/activity_page_view',
    'activity_info_url': _host + '/api/activity_info',
    'domain_url': _host + '/api/domain',
    'activity_recommend_url':_host+'/api/recommend',
    'recommend_url': _host + '/api/recommend_redi',
    'rotation_url_home':_host + '/api/rotation?addr_id=1',
    'notice_url':_host + '/api/bulletin'
};
let imgUrl = _host;
export {httpUrl, imgUrl}