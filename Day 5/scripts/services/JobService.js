hrApp.service('JobService', ['$http', 'CommonResourcesFactoryBackup', function ($http, CommonResourcesFactoryBackup) {
        return {
            findById: function (jobId) {
                return $http.get(CommonResourcesFactoryBackup.findOneJobUrl + jobId)
                    .success(function (data) {
                        return data;
                    })
                    .error(function (err) {
                        return {
                            "jobId": 'PU_CLERK',
                            "jobTitle": "Purchasing Clerk",
                            "maxSalary": 5500,
                            "minSalary": 2500
                        };
                    });
            }
        }
    }]
);