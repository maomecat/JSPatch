//
//  JPViewController.m
//  JSPatch
//
//  Created by bang on 15/5/2.
//  Copyright (c) 2015年 bang. All rights reserved.
//

#import "JPViewController.h"

@implementation JPViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    UIButton *btn = [[UIButton alloc] initWithFrame:CGRectMake(0, 100, [UIScreen mainScreen].bounds.size.width, 50)];
    [btn setTitle:@"Push JPTableViewController" forState:UIControlStateNormal];
    [btn addTarget:self action:@selector(handleBtn:) forControlEvents:UIControlEventTouchUpInside];
    [btn setBackgroundColor:[UIColor grayColor]];
    [self.view addSubview:btn];
    
    UIButton *btn2 = [[UIButton alloc] initWithFrame:CGRectMake(0, 200, [UIScreen mainScreen].bounds.size.width, 50)];
    [btn2 setTitle:@"Push MKViewController" forState:UIControlStateNormal];
    [btn2 addTarget:self action:@selector(handleBtn2:) forControlEvents:UIControlEventTouchUpInside];
    [btn2 setBackgroundColor:[UIColor grayColor]];
    [self.view addSubview:btn2];
    
}

- (void)handleBtn:(id)sender
{
}

- (void)handleBtn2:(id)sender
{
}

@end


