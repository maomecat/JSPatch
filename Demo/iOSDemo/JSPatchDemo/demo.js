//参考文档
//https://github.com/bang590/JSPatch/wiki/%E6%B7%BB%E5%8A%A0-struct-%E7%B1%BB%E5%9E%8B%E6%94%AF%E6%8C%81
require('UIButton,UIColor,UIScreen')

var screenHeight = UIScreen.mainScreen().bounds().height
var screenWidth = UIScreen.mainScreen().bounds().width
var UIControlEventTouchUpInside  = 1 << 6;

defineClass('JPViewController', {
            handleBtn: function(sender) {
            var tableViewCtrl = JPTableViewController.alloc().init()
            self.navigationController().pushViewController_animated(tableViewCtrl, YES)
            },
            handleBtn2:function(sender){
            var MKVC = MKViewController.alloc().init()
            self.navigationController().pushViewController_animated(MKVC,YES)
            }
            })

defineClass('MKViewController',{
            viewDidLoad:function(){
            self.super().viewDidLoad();
            self.view().setBackgroundColor(UIColor.whiteColor());
            //frame
            //        var view = UIView.alloc().initWithFrame({x:20, y:20, width:100, height:100});
            //        var x = view.bounds.x;
            var btn = UIButton.alloc().init();
            var btnFrame = {x:100, y:100, width:100, height:100}
            btn.setFrame(btnFrame)
            btn.setBackgroundColor(UIColor.redColor())
            //给按钮添加点击事件
            btn.addTarget_action_forControlEvents(self,"handleBtn",UIControlEventTouchUpInside)
            self.view().addSubview(btn);
            screenWidth
            
            },
            
            handleBtn:function(){
            console.log(screenHeight,screenWidth)
            // 延时
            dispatch_after(2,function(){
                           console.log("====");
                           })
            //获取主线程
            dispatch_async_main(function(){
                                console.log("++++")
                                })
            dispatch_sync_main(function(){
                               // do something
                               })
            dispatch_async_global_queue(function(){
                                        // do something
                                        })
            }
            })

defineClass('JPTableViewController : UITableViewController <UIAlertViewDelegate>', ['data'], {
            dataSource: function() {
            var data = self.data();
            if (data) return data;
            var data = [];
            for (var i = 0; i < 20; i ++) {
            data.push("cell from js " + i);
            }
            self.setData(data)
            return data;
            },
            numberOfSectionsInTableView: function(tableView) {
            return 1;
            },
            tableView_numberOfRowsInSection: function(tableView, section) {
            return self.dataSource().length;
            },
            tableView_cellForRowAtIndexPath: function(tableView, indexPath) {
            var cell = tableView.dequeueReusableCellWithIdentifier("cell")
            if (!cell) {
            cell = require('UITableViewCell').alloc().initWithStyle_reuseIdentifier(0, "cell")
            }
            cell.textLabel().setText(self.dataSource()[indexPath.row()])
            return cell
            },
            tableView_heightForRowAtIndexPath: function(tableView, indexPath) {
            return 60
            },
            tableView_didSelectRowAtIndexPath: function(tableView, indexPath) {
            var alertView = require('UIAlertView').alloc().initWithTitle_message_delegate_cancelButtonTitle_otherButtonTitles("Alert",self.dataSource()[indexPath.row()], self, "OK",  null);
            alertView.show()
            },
            alertView_willDismissWithButtonIndex: function(alertView, idx) {
            console.log('click btn ' + alertView.buttonTitleAtIndex(idx).toJS())
            }
            })