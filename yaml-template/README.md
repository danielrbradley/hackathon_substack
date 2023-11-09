# Running a template as a component

```
     Type                                      Name                         Status              Info
 +   pulumi:pulumi:Stack                       yaml-template-dev            created (843s)      1 warning
 +   └─ pulumi:pulumi:Program                  website                      created (841s)      
 +      ├─ aws:s3:Bucket                       website-bucket               created (1s)        
 +      ├─ aws:s3:BucketPublicAccessBlock      website-public-access-block  created (0.62s)     
 +      ├─ aws:s3:BucketOwnershipControls      website-ownership-controls   created (0.90s)     
 +      ├─ aws:cloudfront:Distribution         website-cdn                  created (833s)      
 +      └─ synced-folder:index:S3BucketFolder  website-bucket-folder        created (0.57s)     

Outputs:
    url    : "https://dywzmbyogzv1u.cloudfront.net"
    website: {
        cdnHostname   : "dywzmbyogzv1u.cloudfront.net"
        cdnURL        : "https://dywzmbyogzv1u.cloudfront.net"
        originHostname: "website-bucket-9183448.s3-website-eu-west-1.amazonaws.com"
        originURL     : "http://website-bucket-9183448.s3-website-eu-west-1.amazonaws.com"
    }

Resources:
    + 7 created
```
