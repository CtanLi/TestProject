//
//  RNConfig.m
//  TestProject
//
//  Created by Stanley Adigwe on 2023-09-12.
//

#import "RNConfig.h"

@implementation RNConfig

RCT_EXPORT_MODULE();

- (NSDictionary *)constantsToExport {
  
  NSString * BASE_URL = [[NSBundle mainBundle] objectForInfoDictionaryKey: @"BASE_URL"];
  NSString * BUILD_ENV = [[NSBundle mainBundle] objectForInfoDictionaryKey: @"BUILD_ENV"];
  
  NSDictionary *dict = @{ @"BASE_URL": BASE_URL, @"BUILD_ENV": BUILD_ENV};

  return dict;
  
//#if DEV
//  NSString *env = @"dev";
//#elif STAGING
//  NSString *env = @"staging";
//#else
//  NSString *env = @"prod";
//#endif
//  return @{@"env": env};
}

+ (BOOL)requiresMainQueueSetup {
  return YES;
}

@end
